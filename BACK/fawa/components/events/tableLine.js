import { format, isAfter } from 'date-fns'
import { fr } from 'date-fns/locale'
import { useState } from 'react'

const TableLine = ({ line, color, back }) => {

    const [hover, setHover] = useState(false)

    const { name, horaire, type, date, prix }  = line
    
    const today = Date.now()
    const dateEvent = new Date(date)

    const handleMouseEnter = () => {

        setHover(true)

    }

    const handleMouseLeave = () => {

        setHover(false)

    }

    if(isAfter(today, dateEvent)) return

    return <div 
    className='event_table_line'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
        backgroundColor: hover && back,
        color: color,
        borderBottom: `1px solid ${color}`
    }}
    >
        <div>{format(new Date(date), 'eeee dd MMMM', {awareOfUnicodeTokens: true, locale: fr})}</div>
        <div>{horaire}</div>
        <div>{type}</div>
        <div>{name}</div>
        <div>{prix}</div>
    </div>
}
export default TableLine