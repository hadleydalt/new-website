import '../App.css';
import { Tag } from '../graphics/icons/Tag'
import React from 'react';
import { SampleContent } from '../pages/SampleContent'

export const Post = (props) => {

    const tags = props.tags ? props.tags : ['Tag 1', 'Tag 2', 'Tag 3']
    const title = props.title ? props.title : 'Project Title'
    const date = props.date ? props.date : 'May 2020'
    const imgPath = props.imgPath ? props.imgPath : 'sample img'
    const content = props.content ? props.content : <SampleContent />

    const fileStyle = {
        marginLeft: '0px',
        opacity: 1,
        position: 'absolute',
        width: '100%',
        height: '45vh',
        marginTop: '5vh',
        filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.25))',
    }

    const imgStyle = {
        marginLeft: '7%',
        opacity: 1
    }

    const postDateStyle = {
        marginTop: '7vh'
    }

    const postTitleWrapperStyle = {
        marginTop: '12vh'
    }

    const postInnerBGStyle = {
        marginTop: '100vh',
        opacity: 0,
    }

    const postStyle = {
        height: '50vh', 
        width: '38vw',
        marginLeft: '18.5vw',
    }

    return (
        <div className="post" style={postStyle}>
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
            <img src={require('../graphics/images/File.png')} alt="" style={fileStyle}/>
            <div className="post-title-wrapper" style={postTitleWrapperStyle}>
                <div className="post-title-icon" />
                <div className="post-title-text" style={{color: '#909090'}}>{title}</div>
            </div>
            <div className="post-date-wrapper" style={postDateStyle}>
                <div className="post-date-icon" style={{background: 'rgba(145,189,199,1)'}} />
                <div className="post-date-text">Created in <date style={{color: 'rgba(145,189,199,1'}}>{date}</date></div>
            </div>
            <div className="post-image-wrapper" style={imgStyle}>
                <img src={require('../graphics/images/' + imgPath + '.png')} alt="" style={{position: 'absolute', width: '70%', height: '45%', marginTop: '5vh', filter: 'drop-shadow(0px 0px 10px rgba(0,0,0,0.25))'}} />
            </div>
            <div className="post-inner-bg" style={postInnerBGStyle}>
                {content}
            </div>
        </div>
    )
}