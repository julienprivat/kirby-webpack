import TextBubble from "../modules/textBubble"

const Contacts = ({ data }) => {

    const { bubbles, emails, text } = data

    return <div className='contacts'>

        <div className='bubles'>
            {bubbles.map((bubble, index) => {
                return <TextBubble key={`buble-${index}-${bubble.text}`} bubble={bubble}/>
            })}
        </div>

        <div className='content'>
            <h3>Contactez Nous !</h3>
            <div className='content_text'>
                <div>
                    {emails.map((email, index) => {
                        return <p key={`${email.label}-${email.id}`}>{email.label}<br/><a href={`mailto:${email.email}`}>{email.email}</a></p>
                    })}
                </div>
                <div dangerouslySetInnerHTML={{ __html: text }}/>
            </div>
        </div>
    </div>

}
export default Contacts