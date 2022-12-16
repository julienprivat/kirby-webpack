const TextBubble = ({ bubble }) => {

    return <div 
    className="buble_text"
    style= {{
        '--color': bubble.color,
        '--back': bubble.back
    }}
    >
        <div dangerouslySetInnerHTML={{ __html: bubble.text}}></div>
    </div>

}
export default TextBubble