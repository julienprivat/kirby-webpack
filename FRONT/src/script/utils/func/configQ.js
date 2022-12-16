import config from '../../config'
export default (w) => {
    window.innerWidth < 900
        ? config.isMobile = true
        : config.isMobile = false
    return config.isMobile
}