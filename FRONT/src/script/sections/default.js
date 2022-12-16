import Barba from 'barba.js'
import bind from 'es6-class-bind-all'
import choozy from 'choozy'
import { detect } from 'detect-browser'


class Default {
	constructor(opt = {}) {

		this.barba = Barba.BaseView.extend({
			namespace: opt,
			onEnter: () => this.onEnter(),
			onEnterCompleted: () => this.onEnterCompleted(),
			onLeave: () => this.onLeave(),
			onLeaveCompleted: () => this.onLeaveCompleted(),
			onResize: (w, h) => this.onResize(w, h)
		})
		bind(this)

	}

	onEnter() {

		this.refs = choozy(this.barba.container)
		this.beforeMount && this.beforeMount()
		this.browser = detect()

	}

	onEnterCompleted() {

		this.mounted && this.mounted()

	}

	onLeave() {

		this.beforeDestroy && this.beforeDestroy()
	
	}

	onLeaveCompleted() {

		this.destroyed && this.destroyed()

	}

	onResize(w, h) {

		this.resize && this.resize(w, h)

	}

}

export default Default