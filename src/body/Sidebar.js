import '../App.css';
import { useSpring, animated } from 'react-spring'
import React, { useEffect } from 'react';
import { SidebarLink } from './SidebarLink';
import { Smartphone } from '../graphics/icons/Smartphone';
import { Layout } from '../graphics/icons/Layout';
import { Folder } from '../graphics/icons/Folder';
import { Feather } from '../graphics/icons/Feather';
import { ContactBox } from './ContactBox'
import { Link } from 'react-router-dom'

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
                        <Link to='/' style={{textDecoration: 'none'}}>
                            <SidebarLink text="SWE/UX Projects" icon={<Smartphone />}  />
                        </Link>
                        <Link to='/typography-logos' style={{textDecoration: 'none'}}>
                            <SidebarLink text="Typography and Logos" icon={<Layout />} />
                        </Link>
                        <Link to='/digital-illustration' style={{textDecoration: 'none'}}>
                            <SidebarLink text="Digital Illustrations" icon={<Folder />} />
                        </Link>
                        <Link to='painting-fine-art' style={{textDecoration: 'none'}}>
                            <SidebarLink text="Painting and Fine Art" icon={<Feather />} />
                        </Link>
                    </div>
                    <ContactBox />
                </div>
            </div>
        </div>
    )
}