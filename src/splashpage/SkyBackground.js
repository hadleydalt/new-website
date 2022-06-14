import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';
import {useSpring, animated} from 'react-spring'
import React, { useEffect, useState } from 'react';


export const SkyBackground = () => {

    const [hovered, setHovered] = useState(false)

    const style = useSpring({
        position: 'absolute', 
        transform: hovered ? 'translate(0px, -20px)' : 'translate(0px, 0px)',
        config: {
            tension: 100,
            friction: 10,
        },
    })

    useEffect(() => {
        if (!hovered) {
            return
        }
    }, [hovered, 100])

    return (
        <>
            <div className="sky-background">
                <div className="constellations-wrapper">
                    <Constellations />
                    <animated.div 
                        className="intro" 
                        style={style}
                        onMouseEnter={() => setHovered(true)} 
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={require('../graphics/TRANSPARENT SPLASH GRAPHIC.png')} />
                    </animated.div>
                </div>
                <TopBar />
            </div>
        </>
    )
}