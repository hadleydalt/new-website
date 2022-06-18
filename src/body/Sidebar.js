import '../App.css';
import { useSpring, animated } from 'react-spring'
import React, { useEffect } from 'react';

export const Sidebar = (props) => {

    const inPosition = props.inPosition

    const whiteStyle = useSpring({
        marginTop: inPosition ? '2vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 30,
            friction: 5,
        },
    })

    const gradStyle = useSpring({
        marginTop: inPosition ? '-2vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 30,
            friction: 5,
        },
    })

    const dottedStyle = useSpring({
        marginTop: inPosition ? '-7vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 30,
            friction: 5,
        },
    })

    const lineStyle = useSpring({
        marginTop: inPosition ? '7vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 30,
            friction: 5,
        },
    })

    useEffect(() => {
        if (!inPosition) {
            return
        }
    }, [inPosition, 100])

    return (
        <div className="sidebar">
            <div className="inner-box">
                <animated.div className="grad-circle" style={gradStyle} />
                <animated.div className="white-circle" style={whiteStyle} />
                <animated.div className="dotted-circle" style={dottedStyle} />
                <animated.div className="line-circle" style={lineStyle} />
            </div>
        </div>
    )
}