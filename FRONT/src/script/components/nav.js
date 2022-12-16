import select from 'dom-select'
import bind from 'es6-class-bind-all'
import event from 'dom-event'
import InView from 'inview'
import $ from 'jquery'

class Nav {
	constructor() {
		bind(this)

		this.cache()
		this.init()
	}
	cache() {

		this.sliderColor = select('.slider_color')
		this.informationPart = document.querySelector('#infos_part')
        this.informationButton = document.querySelector('.navigation_item[data-menu="information"')
        this.indexButton = document.querySelector('.navigation_item[data-menu="index"')
		
	}

	init() {
		
		event['on'](this.sliderColor, 'click', this.toggleSliderColor)
		event['on'](this.informationButton, 'click', this.goToInfo)
		this.initMonitor()
        
    }

	initMonitor() {

		InView(this.informationPart, (isInView) => {

            if(isInView) {

				this.indexButton.classList.contains('select') && this.indexButton.classList.remove('select')
                !this.informationButton.classList.contains('select') && this.informationButton.classList.add('select')

            } else {

				this.informationButton.classList.contains('select') && this.informationButton.classList.remove('select')

			}

        })

	}

	goToInfo() {

		const speed = 900
        $('html, body').animate( { scrollTop: $('#infos_part').offset().top }, speed )

	}

	toggleSliderColor() {

		document.body.classList.contains('dark_mode')
		? document.body.classList.remove('dark_mode')
		: document.body.classList.add('dark_mode')

	}

}

export default Nav