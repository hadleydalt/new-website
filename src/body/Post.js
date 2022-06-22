import '../App.css';
import { Tag } from '../graphics/icons/Tag'

export const Post = (props) => {

    const tags = props.tags

    return (
        <div className="post">
            <div className="post-tags-wrapper">
                <Tag />
                <div className="post-tags-text-wrapper">
                {tags?.map((tag, index) => {
                    return (
                    <span key={index} className="post-tags-text">
                    <bold>#</bold> {tag}
                    </span>
                    )
                })}
                </div>
            </div>
            <img src={require('../graphics/images/File.png')} alt=""/>
        </div>
    )
}