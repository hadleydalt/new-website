import '../App.css';
import { Tag } from '../graphics/icons/Tag'
import { PostTag } from './PostTag'

export const Post = (props) => {

    const tags = props.tags ? props.tags : ['Tag 1', 'Tag 2', 'Tag 3']
    const title = props.title ? props.title : 'Project Title'
    const date = props.date ? props.date : 'May 2020'

    return (
        <div className="post">
            <div className="post-tags-wrapper">
                <Tag />
                <div className="post-tags-text-wrapper">
                {tags?.map((tag, index) => {
                    return (
                    <PostTag key={index} tag={tag} />
                    )
                })}
                </div>
            </div>
            <img src={require('../graphics/images/File.png')} alt=""/>
            <div className="post-title-wrapper">
                <div className="post-title-icon" />
                <div className="post-title-text">{title}</div>
            </div>
            <div className="post-date-wrapper">
                <div className="post-date-icon" />
                <div className="post-date-text">Created in <date>{date}</date></div>
            </div>
            <div className="post-learn-more">Learn more →</div>
        </div>
    )
}