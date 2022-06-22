import '../App.css';
import { useSpring, animated } from 'react-spring'
import React, { useEffect, useState } from 'react';
import { Pencil } from '../graphics/icons/Pencil'
import { Message } from '../graphics/icons/Message'

export const ContactBox = () => {

    const [hovered, setHovered] = useState(false)

    const style = useSpring({
        borderRadius: hovered ? '2em 1em / 2em 5em' : '0.5em 5em / 8em 1em', 
        config: {
            tension: 30,
            friction: 10
        }
    })

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered, 100])

    return (
        <animated.div className="contact-box" style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
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
        </animated.div>

    )
}