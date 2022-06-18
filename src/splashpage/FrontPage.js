import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';
import React, { useState, createRef } from 'react';
import { ArrowDown } from '../graphics/ArrowDown';
import { ExperimentalObj } from '../body/ExperimentalObj'


export const FrontPage = () => {
    const myRef = createRef()
    const [scrollTop, setScrollTop] = useState(0)
    const [arrowTriggered, setArrowTriggered] = useState(false)

    const onScroll = () => {
        const scrollTop = myRef.current.scrollTop
        setScrollTop(scrollTop)
    }

    const skyStyle = {
        background: "rgb(" + String(214 + scrollTop/9.474) + "," + String(201 + scrollTop/10.286) + "," + String(222 + scrollTop/22.5) + ")",
        background: "linear-gradient(180deg, rgba(" + String(214 + scrollTop/9.474) + "," + String(201 + scrollTop/10.286) + "," + String(222 + scrollTop/22.5) + ",1) 0%, rgba(" + String(scrollTop/2.483) + "," + String(scrollTop/1.90) + "," + String(scrollTop/1.81) + ",1) 100%)"
    }

    return (
        <div 
            className="frontpage-container"
            ref={myRef}
            onScroll={() => onScroll()}
        >
        <div className="sky-background" style={skyStyle}>
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