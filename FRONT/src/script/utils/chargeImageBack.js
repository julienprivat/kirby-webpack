const chargeImageBack = (thumb) => {

    const image = thumb.querySelector('.background_image')
    if(image && image?.dataset.srcset) {
        image.style.backgroundImage = `url('${image.dataset.srcset}')`
        image.removeAttribute('data-srcset')
        thumb.classList.add('visualised')
    } else {
        return
    }
    
}
export default chargeImageBack