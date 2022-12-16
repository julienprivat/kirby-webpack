import classNames from "class-names"
import gsap from 'gsap'
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin'
import { useState } from "react"
import { navigationData } from "../../assets/data/navigationData"

const Item = ({ item, count, setCount, index }) => {

    const [hover, setHover] = useState(false)

    const handleMouseEnter = () => {

        setHover(true)

    }

    const handleMouseLeave = () => {

        setHover(false)

    }

    const handleClick = () => {

        const tl = gsap.timeline()
        .to(window, {
            duration: 0.5,
            scrollTo: 3,
            ease: 'Power3.in',
            onComplete:(() => { setCount(index + 1) })
        })
        .to(window, {
            duration: 0.5,
            scrollTo: window.innerHeight,
            ease: 'Power3.in'
        })

    }

    const quidSelect = classNames({
        select: count == navigationData[index].index
    })

    return <div 
    className={`navigation_item ${quidSelect}`}
    style={{ 
        color: count == navigationData[index].index || hover ? navigationData[count - 1].back : navigationData[count - 1].color,
        backgroundColor : count == navigationData[index].index || hover ? navigationData[count - 1].color : navigationData[count - 1].back,
        cursor: 'pointer'
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
    >
        {item.name}
    </div>

}
export default Item