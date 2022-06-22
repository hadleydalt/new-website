import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';
import React, { useState, createRef } from 'react';
import { ArrowDown } from '../graphics/icons/ArrowDown';
import { Sidebar } from '../body/Sidebar'
import { ExperimentalObj } from '../body/ExperimentalObj';
import { AllPosts } from '../body/AllPosts';
import useWindowDimensions from '../functions/UseWindowDims'

export const FrontPage = () => {
    const myRef = createRef()
    const [scrollTop, setScrollTop] = useState(0)
    const [arrowTriggered, setArrowTriggered] = useState(false)
    const { height, width } = useWindowDimensions()

    const onScroll = () => {
        const scrollTop = myRef.current.scrollTop
        setScrollTop(scrollTop)
    }

    const skyColors = {
        stop1R: (214 - scrollTop/9.474) < 176 ? 176 : 214 - scrollTop/9.474,
        stop1G: (201 + scrollTop/10.286) > 236 ? 236 : 201 + scrollTop/10.286,
        stop1B: (222 + scrollTop/22.5) > 238 ? 238 : 222 + scrollTop/22.5,
        stop2R: scrollTop/2.483 > 176 ? 176 : scrollTop/2.483,
        stop2G: scrollTop/1.90 > 236 ? 236 : scrollTop/1.90,
        stop2B: scrollTop/1.81 > 238 ? 238 : scrollTop/1.81
    }

    const skyStyle = {
        background: "rgb(" + String(skyColors.stop1R) + "," + String(skyColors.stop1G) + "," + String(skyColors.stop1B) + ")",
        background: "linear-gradient(180deg, rgba(" + String(skyColors.stop1R) + "," + String(skyColors.stop1G) + "," + String(skyColors.stop1B) + ",1) 0%, rgba(" + String(skyColors.stop2R) + "," + String(skyColors.stop2G) + "," + String(skyColors.stop2B) + ",1) 100%)"
    }

    const opacity = 1 - (0.0015 * scrollTop)

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
                        <Constellations rotatePos={scrollTop/2} opacity={opacity} />
                        <div 
                            className="intro"
                        >
                            <img src={require('../graphics/images/TRANSPARENT SPLASH GRAPHIC.png')} alt=""/>
                        </div>
                        <ArrowDown arrowTriggered={arrowTriggered}/>
                </div>
                <TopBar opacity={opacity}/>
            </div>
            <div className="content-wrapper">
                <Sidebar inPosition={scrollTop > (height - 300)} />
                <div className="inner-content-wrapper" style={{overflow: scrollTop > height ? 'scroll' : 'hidden'}}>
                    <AllPosts />
                </div>
            </div>
            <ExperimentalObj />
        </div>
    )
}