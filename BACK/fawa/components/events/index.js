import ImageWrapper from "../modules/imageWrapper"
import TextBubble from "../modules/textBubble"
import Table from "./table"

const Events = ({ data }) => {

    const { bubbles, images, table } = data

    return <div className='events'>

        <div className='bubles'>
            {bubbles.map((bubble, index) => {
                return <TextBubble key={`buble-${index}-${bubble.text}`} bubble={bubble}/>
            })}
        </div>
        <Table table={table}/>
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
export default Events