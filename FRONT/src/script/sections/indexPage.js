import Default from './default'
import configQ from '../utils/func/configQ'
import config from '../config'
import event from 'dom-event'
import gsap from 'gsap'
import InView from 'inview'

class IndexPage extends Default {
	constructor() {
		super('indexPage')
	}
	mounted() {

        configQ(window.innerWidth)
        this.cache()
        this.init()

    }

    cache() {

        this.legendItems = [...document.querySelectorAll('.legend_item')]
		this.indexPart = document.querySelector('#index_part')
        this.informationButton = document.querySelector('.navigation_item[data-menu="information"')
        this.indexButton = document.querySelector('.navigation_item[data-menu="index"')

    }

    init() {
        
        document.querySelector('footer').style.position = 'fixed'
        document.querySelector('footer').style.opacity = 1
        this.addEvents('on')
        this.monitorNavigationFooter()

    }


    addEvents(type) {

        this.legendItems.forEach((item) => {

            event[type](item, 'click', this.handleClickLegendItem)

        })

    }

    handleClickLegendItem(e) {

        const item = e.currentTarget.closest('.legend_item')
        const arrow = item.querySelector('.arrow')
        const oldItem = document.querySelector('.legend_item.select')
        const oldArrow = oldItem?.querySelector('.arrow')
        oldItem?.classList.remove('select')
        !item?.classList.contains('select') && item?.classList.add('select')

        const itemName = item.dataset.menu
        const oldTable = document.querySelector('.tables_item.select')
        const table = document.querySelector(`.tables_item.table_${itemName}`)
        const reverseItem = document.querySelector('.tables_item.reverse')

        if(oldTable !== table) {

            oldTable?.classList.remove('select')
            table?.classList.add('select')
            reverseItem?.classList.remove('reverse')

            if(oldItem) {
                const tl2 = gsap.timeline()
                .to(oldArrow, {
                    duration: 0.3,
                    y: -30,
                })
            }

            const tl = gsap.timeline()
            .to(arrow, {
                duration: 0.3,
                y: 0,
            })

        } else {

            if(table.classList.contains('reverse')) {
                // j'ajoute la classe reverse
                table.classList.remove('reverse')
                //j'anime la flèche
                const tl = gsap.timeline()
                .to(arrow, {
                    duration: 0.3,
                    y: 30,
                })
                .to(arrow, {
                    duration: 0,
                    rotate: 90,
                    y: -30
                })
                .to(arrow, {
                    duration: 0.3,
                    y:0
                })

            } else{

                table.classList.add('reverse')

                const tl = gsap.timeline()
                .to(arrow, {
                    duration: 0.3,
                    y: -30,
                })
                .to(arrow, {
                    duration: 0.0,
                    rotate: 270,
                    y: 30
                })
                .to(arrow, {
                    duration: 0.3,
                    y: 0
                })

            }
                
        }

    }

    monitorNavigationFooter(e) {

        this.inview = InView(this.indexPart, (isInView) => {

            if(isInView) {

				this.informationButton.classList.contains('select') && this.informationButton.classList.remove('select')
                !this.indexButton.classList.contains('select') && this.indexButton.classList.add('select')

            } else {

				this.indexButton.classList.contains('select') && this.indexButton.classList.remove('select')

			}

        })

    }

	beforeDestroy() {

		this.addEvents('off')
        this.inview.destroy()
        this.indexButton.classList.contains('select') && this.indexButton.classList.remove('select')

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

export default IndexPage