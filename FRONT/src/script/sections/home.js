import Default from './default'
import configQ from '../utils/func/configQ'
import config from '../config'
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import event from 'dom-event'



class Home extends Default {
	constructor() {
		super('home')
	}
	mounted() {
        configQ(window.innerWidth)
        this.cache()
        this.init()

    }

    cache() {

        gsap.registerPlugin(ScrollTrigger)

    }

    init() {

        this.addEvents('on')
        // this.initScroll()

    }

    addEvents(type) {

        event[type](window, 'scroll', this.handleScroll)

    }

    handleScroll() {

        const windowHeight = window.innerHeight

        const wrapperTop = document.querySelector('.top')
        const topTop = wrapperTop.getBoundingClientRect().top * -1
        const fawaTop = wrapperTop.querySelector('.sub_wrapper')

        const wrapperBottom = document.querySelector('.bot')
        const topBottom = wrapperBottom.getBoundingClientRect().top
        const fawaBottom = wrapperBottom.querySelector('.sub_wrapper')

        fawaTop.style.transform = `scaleY(${(topTop - windowHeight) / windowHeight * -1})`
        fawaBottom.style.transform = `scaleY(${(topBottom - windowHeight) / windowHeight * -1})`

        const container = document.querySelector('.home')
        const scroll = container.getBoundingClientRect().top * -1
        const limit = container.getBoundingClientRect().height

        // scroll < 1 && window.scrollTo({top: 1})
        scroll >= limit - windowHeight && window.scrollTo({top: 1, left: 0})
        scroll < 1 && window.scrollTo({top: limit, left: 0})
        console.log(topBottom , topTop)

    }

    // initScroll() {

    //     const locoScroll = new LocomotiveScroll({
    //         el: document.querySelector('[data-scroll-container]'),
    //         smooth: false,
    //     })
        
    //     locoScroll.on("scroll", (e) => {
    //         ScrollTrigger.update
    //         // console.log(e)
    //         const top = 0
    //         const bottom = e.limit.y
    //         const scroll = e.scroll.y
    //         scroll >= bottom && window.scrollTo({ top: 1, left: 0 })
    //         console.log(scroll, bottom)
    //     })

    //     ScrollTrigger.scrollerProxy(".smooth-scroll", {
    //         scrollTop(value) {
    //             return arguments.length
    //             ? locoScroll.scrollTo(value, 0, 0)
    //             : locoScroll.scroll.instance.scroll.y;
    //         },
    //         getBoundingClientRect() {
    //             return {
    //             top: 0,
    //             left: 0,
    //             width: window.innerWidth,
    //             height: window.innerHeight
    //             };
    //         }
        
    //     // follwoing line is not required to work pinning on touch screen
        
    //     /* pinType: document.querySelector(".smooth-scroll").style.transform
    //         ? "transform"
    //         : "fixed"*/
    //     });



    //     gsap.from('.sub_wrapper_bottom', {
    //         scrollTrigger: {
    //             trigger: '.sub_wrapper_bottom',
    //             scroller: '.smooth-scroll',
    //             scrub: true,
    //             start: '0',
    //             end: "+=100%"
    //         },
    //         scaleY: 0,
    //         ease: 'none',
    //         transformOrigin: '50% 100% 0px'

    //     })

    //     // pars du haut et s'agrandi jusqu'au bas
    //     // gsap.from('.sub_wrapper_top', {
    //     //     scrollTrigger: {
    //     //         trigger: '.sub_wrapper_top',
    //     //         scroller: '.smooth-scroll',
    //     //         scrub: true,
    //     //         start: "top top",
    //     //         end: "+=100%"
    //     //     },
    //     //     scaleY: 0,
    //     //     ease: 'none',
    //     //     transformOrigin: '50% 0% 0px'

    //     // })

    //     gsap.to('.sub_wrapper_top', {
    //         scrollTrigger: {
    //             trigger: '.sub_wrapper_top',
    //             scroller: '.smooth-scroll',
    //             scrub: true,
    //             start: "top top",
    //             end: "+=100%"
    //         },
    //         scaleY: 0,
    //         ease: 'none',
    //         transformOrigin: '50% 0% 0px'

    //     })

    //     // gsap.from('.sub_wrapper_bottom', {
    //     //     scrollTrigger: {
    //     //         trigger: '.sub_wrapper_bottom',
    //     //         scroller: '.smooth-scroll',
    //     //         scrub: true,
    //     //         start: 2378,
    //     //         end: "+=100%"
    //     //     },
    //     //     scaleY: 0,
    //     //     ease: 'none',
    //     //     bottom: 0,
    //     //     top: 'unset',
    //     //     transformOrigin: '50% 0% 0px'

    //     // })

    //     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    //     ScrollTrigger.refresh();


    // }

	beforeDestroy() {

        this.addEvents('off')
        this.handleMouseLeave()

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

export default Home