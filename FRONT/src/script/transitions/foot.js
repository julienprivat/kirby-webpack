import gsap from "gsap"

export default function foot(oldContainer, newContainer, done) {
	
    const tl = gsap.timeline()
    tl.to(oldContainer, {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
    })
    tl.to(oldContainer, {
        duration: 0,
        display: 'none'
    })
    tl.to(document.querySelector('footer'), {
        duration: 0.3,
        opacity: 0
    })
    tl.to(document.querySelector('footer'), {
        duration: 0,
        position: 'absolute',
        opacity: 1
    })
    tl.to(newContainer, {
        duration: 0,
        opacity : 0,
        visibility: 'visible'
    })
    tl.to(newContainer, {
        duration: 1,
        opacity: 1,
        ease: "power2.in",
    })
    tl.then(done)

}