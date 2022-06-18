import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';
import { useSpring, animated } from 'react-spring'
import React, { useEffect } from 'react';
import { ArrowDown } from '../graphics/ArrowDown';
import { ExperimentalObj } from '../body/ExperimentalObj'


export class FrontPage extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = { scrollTop: 0, arrowTriggered: false }
    }

    onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        this.setState({
            scrollTop: scrollTop
        })
    }

    render() {
        const {
            scrollTop,
            arrowTriggered
        } = this.state

        //const [arrowTriggered, setArrowTriggered] = useState(false)

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
        }, [arrowTriggered])

        return (
            <div 
                className="frontpage-container"
                ref={this.myRef}
                onScroll={this.onScroll}
            >
            <div className="sky-background">
                <div 
                    className="constellations-wrapper"
                    onMouseOver={() => {
                        this.setState({
                            arrowTriggered: !arrowTriggered
                        })}}
                >
                        <Constellations rotatePos={scrollTop}/>
                        <div 
                            className="intro"
                        >
                            <img src={require('../graphics/TRANSPARENT SPLASH GRAPHIC.png')} alt=""/>
                        </div>
                        <animated.div className="scroll-indicator" style={arrowStyle}>
                            Scroll
                            <ArrowDown />
                        </animated.div>
                </div>
                <TopBar />
            </div>
            <ExperimentalObj />
        </div>
        )
    }
}