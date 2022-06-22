import '../App.css';
import { useState } from 'react'

export const PostTag = (props) => {
    const [hovered, setHovered] = useState(false)
    const tag = props.tag

    return (
        <span 
            className="post-tags-text"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
        <bold>✘</bold> {hovered ? <hovered>{tag}</hovered> : tag}
        </span>
        )
}