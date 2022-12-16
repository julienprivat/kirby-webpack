import ImageWrapper from "../modules/imageWrapper"
import TextBubble from "../modules/textBubble"

const Restaurant = ({ data }) => {

    const { bubbles, images, horaires } = data

    console.log(horaires)
    return <div className='restaurant'>

        <div className='bubles'>
            {bubbles.map((bubble, index) => {
                return <TextBubble key={`buble-${index}-${bubble.text}`} bubble={bubble}/>
            })}
        </div>

        <div 
        className='horaire'
        style={{
            color: horaires.color
        }}
        >
            <h3>Le Restaurant est ouvert</h3>
            <div className='text_content' dangerouslySetInnerHTML={{ __html: horaires.text }}></div>
        </div>

        <div className='images'>
            {images.map((image, index) => {
                return <ImageWrapper 
                key={`illl-${index}${image.src}`} 
                image={image}
                />
            })}
        </div>

    </div>

}
export default Restaurant