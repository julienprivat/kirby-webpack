export default {
	scaleY: {
		transform(data) {
			const {
				previous,
				current,
				transformPrefix
			} = data.globalState
			const {
				context
			} = data.sceneState.cache
			const {
				transform
			} = data
			const delta = current - previous
			const scale = Math.min(1 + Math.abs(delta) / 75)
			context.style[transformPrefix] = `translate3d(0, ${transform}px, 0) scaleY(${scale})`
			context.style.transformOrigin = `50% ${50 - delta * 2}%`
		}
	},
	rotateZ: {
		transform(data) {
			const {
				previous,
				current,
				transformPrefix
			} = data.globalState
			const {
				context
			} = data.sceneState.cache
			const {
				transform
			} = data
			const delta = current - previous
			const rotationZ = delta / 2
			const skew = delta / 2.5
			context.style[transformPrefix] = `translate3d(0, ${transform}px, 0) rotateZ(${rotationZ}deg) skew(${skew}deg)`
		}
	},
	rotateX: {
		transform(data) {
			const {
				previous,
				current,
				transformPrefix
			} = data.globalState
			const {
				context
			} = data.sceneState.cache
			const {
				transform
			} = data
			const delta = current - previous
			const rotationX = 1 + delta / 3
			context.style[transformPrefix] = `translate3d(0, ${transform}px, 0) rotateX(${rotationX}deg)`
		}
	},
	moveLeft: {
		transform(data) {
			const {
				previous,
				current,
				transformPrefix
			} = data.globalState
			const {
				context
			} = data.sceneState.cache
			const {
				transform
			} = data
			const delta = current - previous
			context.style[transformPrefix] = `translate3d(${transform}px, 0, 0)`
		}
	},
	hero: {
		trigger: 'start',
		speed: 0,
		appear(data) {
			console.log('hero scene appears', data.sceneState.cache.context)
		},
		disappear(data) {
			console.log('hero scene appears', data.sceneState.cache.context)
		},
		transform(data) {
			console.log('data is', data)
		}
	},
	fixed: {
		transform(data) {
			const { bounding, previous, current, transformPrefix } = data.globalState
			const { context } = data.sceneState.cache
			const { transform } = data
			const delta = current - previous
			const native = this.options.native
			const difference = bounding - ( native ? window.innerHeight : 0)

			context.style[transformPrefix] = `translate3d(0, ${-difference}px, 0)`
		}
	}
}