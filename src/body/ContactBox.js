import '../App.css';
import { Pencil } from '../graphics/icons/Pencil'
import { Message } from '../graphics/icons/Message'

export const ContactBox = () => {

    return (
        <div className="contact-box">
            <div className="contact-box-tape" />
            <div className="contact-box-title">
                Contact
            </div>
            <div className="contact-box-text">
                <Pencil />
                This site was designed, illustrated and coded by me. If 
you are interested in a creative commission please 
contact me at <accent1>hadley_dalton@brown.edu</accent1>, preferably 
with "<accent2>Commission</accent2>" in the subject line. 
<p>
    <Message />

For anything else, don’t hesitate to get in touch 
by emailing me at hadley_dalton@brown.edu! 
</p>
            </div>
        </div>

    )
}