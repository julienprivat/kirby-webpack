import Default from './default'
import configQ from '../utils/func/configQ'
import config from '../config'
import event from 'dom-event'
import InView from 'inview'


class Projet extends Default {
	constructor() {
		super('projet')
	}
	mounted() {
        configQ(window.innerWidth)
        this.cache()
        this.init()

    }

    cache() {

        this.thumbs = [...document.querySelectorAll('.figure')]

    }

    init() {
        
        document.querySelector('footer').style.position = 'absolute'
        document.querySelector('footer').style.opacity = 1
        this.addEvents('on')
        this.initMonitor()

    }


    addEvents(type) {

        event[type](window, 'scroll', this.handleScroll)

    }

    initMonitor() {

        this.thumbs.forEach((thumb) => {

            InView(thumb, function(isInView) {

                if (isInView) {
                    
                    const images = [...thumb.querySelectorAll('img')]
                    images.forEach((image) => {
                        if(image && image?.dataset.srcset) {
                            image.srcset = image?.dataset.srcset
                            image.removeAttribute('data-srcset')
                            image.classList.add('visualised')
                            this.destroy()
                        }
                    })

                    thumb.classList.add('visualised')

                }
            })

        })

    }

    handleScroll() {

        const currentScrollPos = window.pageYOffset

        this.prevScrollpos > currentScrollPos
        ?document.querySelector(".nav_project").style.top = "0"
        :document.querySelector(".nav_project").style.top = "-90px"
        
        this.prevScrollpos = currentScrollPos

    }

    chargeImage(image_wrapper) {

        const image = image_wrapper.querySelector('img')
        if(image?.dataset.srcset) {
            image.srcset = image.dataset.srcset
            image.removeAttribute('data-srcset')
        } else {
            return
        }
        
    }

	beforeDestroy() {

		this.addEvents('off')

    }

	resize(w) {

        this.mid = (window.innerWidth - 40) / 2
		const oldConfig = config.isMobile        
        configQ(w)
        if (oldConfig !== config.isMobile) {
            this.addEvents('off')
            this.mounted()
        }

	}
}

export default Projet