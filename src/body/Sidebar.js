import '../App.css';
import { useSpring, animated } from 'react-spring'
import React, { useEffect } from 'react';
import { SidebarLink } from './SidebarLink';
import { Smartphone } from '../graphics/icons/Smartphone';
import { Layout } from '../graphics/icons/Layout';
import { Folder } from '../graphics/icons/Folder';
import { Feather } from '../graphics/icons/Feather';
import { ContactBox } from './ContactBox'

export const Sidebar = (props) => {

    const inPosition = props.inPosition

    const whiteStyle = useSpring({
        marginTop: inPosition ? '2vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const gradStyle = useSpring({
        marginTop: inPosition ? '-2vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const dottedStyle = useSpring({
        marginTop: inPosition ? '-7vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
        },
    })

    const lineStyle = useSpring({
        marginTop: inPosition ? '7vh' : '-20vh',
        opacity: inPosition ? 1 : 0,
        config: {
            tension: 50,
            friction: 4,
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
                <div className="sidebar-content-wrapper">
                    <div className="sidebar-title">Navigation</div>
                    <div className="sidebar-links-wrapper">
                        <SidebarLink text="SWE/UX Projects" icon={<Smartphone />}/>
                        <SidebarLink text="Typography and Logos" icon={<Layout />}/>
                        <SidebarLink text="Digital Illustrations" icon={<Folder />}/>
                        <SidebarLink text="Painting and Fine Art" icon={<Feather />}/>
                    </div>
                    <ContactBox />
                </div>
            </div>
        </div>
    )
}