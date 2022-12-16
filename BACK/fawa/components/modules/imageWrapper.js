const ImageWrapper = ({ image }) => {

    return <div class='illustration_wrapper' style={{ 
        width: image.format == '100%' ? '80%' : '50%',
        margin: image.format == '100%' && 'auto'
    }}>
        <img src={image.src}></img>
        <div style={{ color: image.color }} dangerouslySetInnerHTML={{ __html: image.caption}}></div>
    </div>

}
export default ImageWrapper