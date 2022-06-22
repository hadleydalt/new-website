import '../App.css';
import { Post } from './Post'

/* Insert new posts and edit existing posts here! */

export const AllPosts = () => {

    return (
        <>
        <Post tags={['Tag 1', 'Tag 2', 'Tag 3']} />
        <Post />
        <Post />
        </>
    )
}