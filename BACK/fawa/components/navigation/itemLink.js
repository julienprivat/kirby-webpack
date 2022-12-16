import classNames from "class-names"
import { useState } from "react"
import { navigationData } from "../../assets/data/navigationData"

const ItemLink = ({ color, back, label, link }) => {

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {

        setHover(true)

    }

    const handleMouseLeave = () => {

        setHover(false)

    }

    return <div 
    className={`navigation_item`}
    style={{ 
        color: hover && link ? back : color,
        backgroundColor : hover && link ? color : back,
        cursor: link && 'pointer'
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        {label}
    </div>

}
export default ItemLink