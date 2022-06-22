import '../App.css';
import { Post } from './Post'

/* Insert new posts and edit existing posts here! */

export const AllPosts = () => {

    return (
        <>
        <Post 
            title="Project Title"
            tags={['Tag 1', 'Tag 2', 'Tag 3']} 
            date="May 2020"
        />
        <Post />
        <Post />
        </>
    )
}