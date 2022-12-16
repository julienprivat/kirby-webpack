export default () => {
    let windowWidth = window.innerWidth,
        body = document.querySelector('body')
    
    body.setAttribute('style', '--width: ' + windowWidth)
}