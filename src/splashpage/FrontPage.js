import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';
import React, { useState } from 'react';
import { ArrowDown } from '../graphics/ArrowDown';
import { ExperimentalObj } from '../body/ExperimentalObj'


export const FrontPage = () => {
    const myRef = React.createRef()
    const [scrollTop, setScrollTop] = useState(0)
    const [arrowTriggered, setArrowTriggered] = useState(false)

    const onScroll = () => {
        const scrollTop = myRef.current.scrollTop
        setScrollTop(scrollTop)
    }

    return (
        <div 
            className="frontpage-container"
            ref={myRef}
            onScroll={() => onScroll()}
        >
        <div className="sky-background">
            <div 
                className="constellations-wrapper"
                onMouseOver={() => {
                    setArrowTriggered(!arrowTriggered)}}
                >
                        <Constellations rotatePos={scrollTop/5}/>
                        <div 
                            className="intro"
                        >
                            <img src={require('../graphics/TRANSPARENT SPLASH GRAPHIC.png')} alt=""/>
                        </div>
                        <ArrowDown arrowTriggered={arrowTriggered}/>
                </div>
                <TopBar />
            </div>
            <ExperimentalObj />
        </div>
    )
}