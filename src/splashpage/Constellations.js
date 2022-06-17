import '../App.css';
import { animated } from 'react-spring'
import React, { useEffect, useState } from 'react';

export const Constellations = (props) => {
    const [rotatePos, setRotatePos] = useState(props.rotatePos)

    const style = {
        transform: `rotate(${props.rotatePos}deg)`
    }

    const handleScroll = () => {
        if (window.scrollY > 360) {
            setRotatePos(window.scrollY % 360)
        } else {
            setRotatePos(window.scrollY)
        }
    }

    return (
        <>
            <img className="constellations" src={require('../graphics/ConstellationsNoAxis.png')} style={style} />
            <img className="axis" src={require('../graphics/Axis.png')} style={style}/>
        </> 
    )
}