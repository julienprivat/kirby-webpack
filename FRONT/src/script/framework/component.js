export default class Component {
	constructor() {
		this.state = {}
	}
	setState(obj = {}) {
		const oldState = this.state
		this.state = Object.assign({}, this.state, obj)
		this.didUpdate(oldState)
		return this.state
	}
	didUpdate(oldState) {}
}