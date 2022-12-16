const chargeImage = (image_wrapper) => {

    const image = image_wrapper.querySelector('img')
    if(image?.dataset.srcset) {
        image.srcset = image.dataset.srcset
        image.removeAttribute('data-srcset')
    } else {
        return
    }
    
}
export default chargeImage