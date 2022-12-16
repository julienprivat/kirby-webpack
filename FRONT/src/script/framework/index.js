import Barba from 'barba.js'
import FastClick from 'fastclick'
import css from 'dom-css'
import config from '../config'
import sections from '../sections'
import transitionReducer from '../transitions'
import Nav from '../components/nav'
import select from 'dom-select'


export default class Framework {
	constructor(App) {
		this.setup()
		this.init(App)
	}
	setup() {

		config.isDevice && FastClick.attach(config.body)
	}

	init(App) {

		console.log('init', Barba)
		this.app = new App()
		this.addEvents()
		this.initBarba()
		this.onResize()
		// new Nav

	}

	addEvents() {

		window.addEventListener('resize', this.onResize)
		Barba.Dispatcher.on('linkClicked', this.onLinkClicked)
		Barba.Dispatcher.on('initStateChange', this.onInitStateChange)
		Barba.Dispatcher.on('newPageReady', this.onNewPageReady)
		Barba.Dispatcher.on('transitionCompleted', this.onTransitionCompleted)

	}

	initBarba() {

		sections.map(view => view.barba.init())
		Barba.Prefetch.init()
		Barba.Pjax.Dom.wrapperId = 'content'
		Barba.Pjax.Dom.containerClass = 'page'
		Barba.Pjax.getTransition = transitionReducer
		Barba.Pjax.start()

	}

	onResize = () => {

		config.width = window.innerWidth
		config.height = window.innerHeight
		this.traverse('onResize', config.width, config.height)

	}

	onLinkClicked = (...args) => {

		console.log('link clicked')
		this.traverseApp('onLinkClicked', ...args)

	}

	onInitStateChange = (...args) => {

		css(config.html, {
			pointerEvents: 'none'
		})
		this.traverseApp('onInitStateChange', ...args)

	}

	onNewPageReady = (currentStatus, ...args) => {

		const namespace = select("section[data-namespace=\"".concat(currentStatus.namespace, "\"]")).dataset.menu
		const oldNavigationSelected = document.querySelector('.navigation_item.selected')
        const navigationLinkIsActive = document.querySelector(`.item_${namespace}`)

		oldNavigationSelected?.classList.remove('selected')
		navigationLinkIsActive?.classList.add('selected')

        // navigationLinks.forEach((navigationLink) => {
        //     navigationLink.classList.remove('menu_item--is-active')
        // })

        // if (navigationLinkIsActive !== null && navigationLinkIsActive.closest('.menu_item') == select('.item_projects')) {
        //     select('.item_projects').classList.add('menu_item--is-active')
        // }

        // if (navigationLinkIsActive !== null && navigationLinkIsActive.closest('.menu_item') == select('.item_journal')) {
        //     select('.item_journal').classList.add('menu_item--is-active')
        // }

        // if (navigationLinkIsActive !== null && navigationLinkIsActive.closest('.menu_item') == select('.item_about')) {
        //     select('.item_about').classList.add('menu_item--is-active')
        // }

		this.updateBodyClass()
		this.traverseApp('onNewPageReady', ...args)

	}

	onTransitionCompleted = (...args) => {

		css(config.html, {
			pointerEvents: 'auto'
		})
		this.traverseApp('onTransitionCompleted', ...args)

	}

	updateBodyClass() {

		config.body.classList.add(
			`is-${Barba.Pjax.History.currentStatus().namespace}`,
		)
		if (Barba.Pjax.History.prevStatus()) {
			config.body.classList.remove(
				`is-${Barba.Pjax.History.prevStatus().namespace}`,
			)
		}

	}

	traverseApp = (fn, ...args) => {

		typeof this.app[fn] === 'function' && this.app[fn](...args)

	}

	traverseViews = (fn, ...args) => {

		sections
			.filter(
				view =>
					Barba.HistoryManager.currentStatus() &&
				view.barba.namespace === Barba.HistoryManager.currentStatus().namespace,
			)
			.map(view => typeof view.barba[fn] === 'function' && view.barba[fn](...args))

	}

	traverse = (fn, ...args) => {

		this.traverseApp(fn, ...args)
		this.traverseViews(fn, ...args)

	}
}