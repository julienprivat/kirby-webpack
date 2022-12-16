export default (el, selector) => {

	function closest(el, selector, stopSelector) {
		let retval = null
		while (el) {
			if (el.matches(selector)) {
				retval = el
				break
			} else if (stopSelector && el.matches(stopSelector)) {
				break
			}
			el = el.parentElement
		}
		return retval
	}

	let object = closest(el, selector)

	return object
}