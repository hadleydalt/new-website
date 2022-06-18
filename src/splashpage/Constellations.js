import '../App.css';
import { animated } from 'react-spring'
import React, { useEffect, useState } from 'react';

export class Constellations extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {scrollTop: 0}
    }

    onScroll = () => {
        const scrollY = window.scrollY
        const scrollTop = this.myRef.current.scrollTop
        this.setState({
            scrollTop: scrollTop
        })
        console.log("scrollTop is " + scrollTop)
    }

    render() {
        const {
            scrollTop 
        } = this.state 

        const style = {
            transform: `rotate(${scrollTop}deg)`
        }
        return (
        <>
            <img 
                className="constellations" 
                ref={this.myRef}
                onScroll={this.onScroll}
                style={style}
                src={require('../graphics/ConstellationsNoAxis.png')}  />
            <img 
                className="axis" 
                ref={this.myRef}
                src={require('../graphics/Axis.png')} 
                style={style}/>
        </>
        )
    }
}