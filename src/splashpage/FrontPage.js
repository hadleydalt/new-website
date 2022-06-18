import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';
import { useSpring, animated } from 'react-spring'
import React, { useEffect, useState } from 'react';
import { ArrowDown } from '../graphics/ArrowDown'
import { ExperimentalObj } from '../body/ExperimentalObj'


export const FrontPage = () => {

    const [arrowTriggered, setArrowTriggered] = useState(false)

    const arrowStyle = useSpring({
        transform: arrowTriggered ? 'translate(0px, 4px)' : 'translate(0px, 0px)',
        config: {
            tension: 300,
            friction: 1,
        },
    })

    useEffect(() => {
        if (!arrowTriggered) {
          return
        }
      }, [arrowTriggered]);

    return (
        <>
            <div className="sky-background">
                <div 
                    className="constellations-wrapper"
                    onMouseOver={() => setArrowTriggered(arrowTriggered ? false : true)}>
                        <Constellations rotatePos={0}/>
                        <animated.div 
                            className="intro"
                        >
                            <img src={require('../graphics/TRANSPARENT SPLASH GRAPHIC.png')} alt=""/>
                        </animated.div>
                        <animated.div className="scroll-indicator" style={arrowStyle}>
                            Scroll
                            <ArrowDown />
                        </animated.div>
                </div>
                <TopBar />
            </div>
            <ExperimentalObj />
        </>
    )
}