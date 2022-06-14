import '../App.css';
import React, { useState } from 'react';

export const TopBarLink = (props) => {
    const [hovered, setHovered] = useState(false)

    if (props.dec) {
        return (
            <div className="topbar-link-dec-wrapper">
                <div 
                    onMouseEnter={() => setHovered(true)} 
                    onMouseLeave={() => setHovered(false)}
                    className={hovered ? "topbar-link-dec-hovered" : "topbar-link-dec"}>{props.text}
                </div>
            </div>
        )
    } else {
        return (
            <div 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                className={hovered ? "topbar-link-hovered" : "topbar-link"}>{props.text}
            </div>
        )
    }
}