import '../App.css';
import { Tag } from '../graphics/icons/Tag'
import { PostLearnMore } from './PostLearnMore';
import React, { useEffect, useState } from 'react';
import {useSpring, animated} from 'react-spring'
import { SamplePost } from './SamplePost'

export const Post = (props) => {

    const [expanded, setExpanded] = useState(false)

    const tags = props.tags ? props.tags : ['Tag 1', 'Tag 2', 'Tag 3']
    const title = props.title ? props.title : 'Project Title'
    const date = props.date ? props.date : 'May 2020'
    const imgPath = props.imgPath ? props.imgPath : 'sample img'
    const innerChild = props.innerChild ? props.innerChild : <SamplePost />

    const fileStyle = useSpring({
        marginLeft: expanded ? '-150vw' : '0px',
        opacity: expanded ? 0 : 1,
        config: {
            tension: 100,
            friction: 15
        }
    })

    const imgStyle = useSpring({
        marginLeft: expanded ? '100%' : '7%',
        opacity: expanded ? 0 : 1,
        config: {
            tension: 100,
            friction: 15
        }
    })

    const postDateStyle = useSpring({
        marginTop: expanded ? '2.5vh' : '7vh',
        config: {
            tension: 100,
            friction: 15
        }
    })

    const postTitleWrapperStyle = useSpring({
        marginTop: expanded ? '10vh' : '12vh',
        config: {
            tension: 100,
            friction: 15
        }
    })

    const postInnerBGStyle = useSpring({
        marginTop: expanded ? '23vh' : '100vh',
        opacity: expanded ? 1 : 0,
        config: {
            tension: 100, 
            friction: 15
        }
    })

    const postStyle = useSpring({
        height: expanded ? '80vh' : '50vh', 
        config: {
            tension: 100,
            friction: 15
        }
    })

    useEffect(() => {
        if (!expanded) {
            return
        }
    }, [expanded])

    return (
        <animated.div className="post" style={postStyle}>
            <div className="post-tags-wrapper">
                <Tag />
                <div className="post-tags-text-wrapper">
                {tags?.map((tag, index) => {
                    return (
                        <span 
                            key={index}
                            className="post-tags-text">
                        <bold>✘</bold> {tag}
                        </span>
                    )
                })}
                </div>
            </div>
            <animated.img src={require('../graphics/images/File.png')} alt="" style={fileStyle}/>
            <animated.div className="post-title-wrapper" style={postTitleWrapperStyle}>
                <div className="post-title-icon" />
                <div className="post-title-text" style={{color: expanded ? 'white' : '#909090'}}>{title}</div>
            </animated.div>
            <animated.div className="post-date-wrapper" style={postDateStyle}>
                <div className="post-date-icon" style={{background: expanded ? 'transparent' : 'rgba(145,189,199,1)'}} />
                <div className="post-date-text">Created in <date style={{color: expanded ? 'white' : 'rgba(145,189,199,1'}}>{date}</date></div>
            </animated.div>
            <animated.div className="post-image-wrapper" style={imgStyle}>
                <img src={require('../graphics/images/' + imgPath + '.png')} alt="" style={{width: '70%', height: '45%'}} />
                <div class="post-image-tape" />
            </animated.div>
            <div onMouseDown={() => setExpanded(expanded ? false : true)}>
                <PostLearnMore pressed={expanded}/>
            </div>
            <animated.div className="post-inner-bg" style={postInnerBGStyle}>
                {innerChild}
            </animated.div>
        </animated.div>
    )
}