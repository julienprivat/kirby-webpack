const fs = require('fs-extra')
const path = require('path')
const browserSync = require('browser-sync')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.dev')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const hostRewriter = require('./utils/body-host-rewriter')
const php = require('@pqml/node-php-server')

const Tail = require('tail').Tail

const user = require('../main.config.js')

const sh = require('kool-shell')()
  .use(require('kool-shell/plugins/log'))
  .use(require('kool-shell/plugins/exit'))

const LOGPATH = path.join(process.cwd(), 'php-error.log')
const bs = browserSync.create()
const useProxy = !!user.devServer.proxy

let isWebpackInit, isPhpInit
let compiler
let hotMiddleware, devMiddleware, proxyAddr, phpServer, rewriteHost

phpInit()

function phpInit () {
  sh.log()

  sh.step(1, 3, useProxy
    ? 'PHP has to run from your proxy, ' + user.devServer.proxy
    : 'Starting a php server...')

  // if a proxy is set we don't need to create a built-in php server
  if (useProxy) {
    proxyAddr = user.devServer.proxy
    rewriteHost = hostRewriter(proxyAddr)
    isPhpInit = true
    return webpackInit()
  }

  let args = [
    '-d', 'upload_max_filesize=100M',
    '-d', 'post_max_size=500M'
  ]

  if (user.devServer.logPhpErrors) {
    args.push('-d', 'error_log="' + LOGPATH + '"')
  }

  phpServer = php({
    bin: user.devServer.phpBinary || 'php',
    host: 'localhost',
    root: user.paths.www,
    verbose: false,
    promptBinary: true,
    args
  })

  phpServer.on('start', ({host, port}) => {
    if (isPhpInit) return
    // php server can't be reach through localhost, we have to use [::1]
    sh.log('PHP Server started on ' + host + ':' + port + '\n')

    if (host === 'localhost') {
      sh.warn('\nNode can\'t reach PHP built-in server through localhost.\nProxying [::1]:' + port + ' instead.')
      host = '[::1]'
    }

    proxyAddr = host + ':' + port
    rewriteHost = hostRewriter(host, port)
    isPhpInit = true
    webpackInit()
  })

  phpServer.start()
}

function webpackInit () {
  sh.log()
  sh.step(2, 3, 'Running the webpack compiler...')

  compiler = webpack(webpackConfig)
  hotMiddleware = webpackHotMiddleware(compiler)
  devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: user.paths.basepath,
    stats: {
      colors: true,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })
  compiler.plugin('done', () => {
    // init the browserSync server once a first build is ready
    if (isWebpackInit) return
    isWebpackInit = true
    process.nextTick(browserSyncInit)
  })
}

function browserSyncInit () {
  sh.log()
  sh.step(3, 3, 'Starting the browser-sync server...')

  const middlewares = [devMiddleware, hotMiddleware]

  bs.init({
    port: user.devServer.port || 8080,
    proxy: {
      target: proxyAddr,
      middleware: middlewares,
      proxyReq: [(proxyReq, req, res) => {
        proxyReq.setHeader('X-Forwarded-For', 'webpack')
        proxyReq.setHeader('X-Forwarded-Host', req.headers.host)
        rewriteHost(res, req.headers.host)
      }]
    },
    open: false,
    reloadOnRestart: true,
    notify: false,
    files: [path.join(user.paths.www, '**/*')],
    watchOptions: {
      ignoreInitial: true,
      ignored: [
        path.join(user.paths.www, '**/*.log'),
        path.join(user.paths.www, 'content', '**/*'),
        path.join(user.paths.www, 'site', 'cache', '**/*'),
        path.join(user.paths.www, 'site', 'accounts', '**/*'),
        path.join(user.paths.www, 'thumbs', '**/*')
      ]
    }
  }, ready)
}

function ready () {
  process.nextTick(() => {
    sh.log()
    sh.success('kirby-webpack server is up and running\n')
    if (user.devServer.logPhpErrors) logPhpError()
  })
}

function logPhpError () {
  fs.ensureFile(LOGPATH)
    .then(() => {
      const tail = new Tail(LOGPATH, {
        useWatchFile: true,
        fsWatchOptions: { interval: 300 }
      })
      tail.on('line', (data) => {
        data = data.toString('utf8').split(']')
        const date = sh.colors.gray(data.shift() + ']')
        data = date + data.join(']')
        sh.log(sh.colors.red('[PHP]') + data)
      })
      tail.on('error', err => sh.error(err))
    })
    .catch(err => {
      sh.error(err)
    })
}
