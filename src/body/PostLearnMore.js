import '../App.css';
import React, { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring'

export const PostLearnMore = (props) => {

    const [hovered, setHovered] = useState(false)
    const pressed = props.pressed
    
    const style = useSpring({
        fontSize: hovered ? '2.2vh' : '2vh',
        fontWeight: hovered ? 'bold' : 'none',
        textDecoration: hovered ? 'underline' : 'none',
        letterSpacing: hovered ? '1px' : '0px',
        marginTop: pressed ? '17vh' : pressed && hovered ? '17vh' : hovered ? '18.9vh' : '19vh',
        color: pressed ? 'rgb(250,250,250)' : 'rgb(145,189,199)',
        config: {
            tension: 50,
            friction: 10
        }
    })

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered])

    return (
        <animated.div 
            className="post-learn-more"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={style}>
                {pressed ? '← Collapse' : 'Click to learn more →'}
            </animated.div>
    )
}