import '../App.css';
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

export const SidebarLink = (props) => {
    const [hovered, setHovered] = useState(false)

    const linkStyle = useSpring({
        width: hovered ? '10vw' : '0',
        opacity: hovered ? 0.8 : 0,
        config: {
            tension: 60,
            friction: 10,
        },
    })

    /*const iconClickedStyle = {
        filter: clicked ? "drop-shadow(0px 0px 2px rgba(250,250,250,1))" : "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))", 
    }

    const textClickedStyle = {
        filter: clicked ? "drop-shadow(0px 0px 2px rgba(250,250,250,1))" : "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))", 
    } */

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered, 50])

    return (
        <>
        <animated.div className="sidebar-link-hovered-bg" style={linkStyle} />
        <div className="sidebar-link">
            {props.icon}
            <div className="sidebar-link-text" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{props.text}</div>
        </div>
        </>
    )
}