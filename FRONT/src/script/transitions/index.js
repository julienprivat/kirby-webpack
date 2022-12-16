import Barba from 'barba.js'
import css from 'dom-css'
import config from '../config'
import fade from './fade'
import foot from './foot'

const map = {

	default: fade,
	home: {

		projet: foot,

	},
	indexPage: {

		projet: foot,

	},
	projet: {
		projet: foot
	}
}
export default function transitionReducer() {
	return Barba.BaseTransition.extend({
		start() {
			css(config.html, {
				cursor: 'wait'
			})
			this.newContainerLoading.then(() => {
				css(config.html, {
					cursor: 'default'
				})
				const from = Barba.Pjax.History.prevStatus().namespace
				const to = Barba.Pjax.History.currentStatus().namespace
				return ((map[from] && map[from][to]) || map.default)(
					this.oldContainer,
					this.newContainer,
					this.done.bind(this),
					window.scrollTo(0,0)
				)
			})
		},
	})
}