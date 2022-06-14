import '../App.css';
import React, { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring'

export const TopBarLink = (props) => {
    const [hovered, setHovered] = useState(false)

    const decStyle = useSpring({
        lineHeight: hovered ? 45 : 30,
        fontFamily: 'Trebuchet MS',
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: 'bold',
        background: 'rgb(214,201,222)',
        background: 'linear-gradient(90deg, rgba(214,201,222,1) 0%, rgba(145,189,199,1) 100%)',
        filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.25))',
        paddingRight: hovered ? 20 : 10,
        paddingLeft: hovered ? 20 : 10,
        height: hovered ? 45: 30,
        borderRadius: hovered ? '2em 1em 4em / 0.5em 3em' : 25,
        border: '2px solid white', 
        config: {
            tension: 300,
            friction: 10,
        },
    })

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered, 150])


    if (props.dec) {
        return (
            <div className="topbar-link-dec-wrapper">
                <animated.div 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    style={decStyle}>{props.text}
                </animated.div>
            </div>
        )
    } else {
        return (
            <div 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                className={hovered ? "topbar-link-hovered" : "topbar-link"}>{props.text}
            </div>
        )
    }
}