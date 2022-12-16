export default (el) => {
    return Object.prototype.toString.call( el ) === '[object Array]' ||
        Object.prototype.toString.call( el ) === '[object NodeList]'
}