import '../App.css';
import { Post } from '../body/Post'

/* Insert new posts and edit existing posts here! 

Use these Props: 

tags 
------ 
Type: String[]
Example: ["Frontend", "Backend", "Full stack development"]

title
------ 
Type: String
Example: "DASH: Web app redesign"

date 
------ 
Type: String
Example: "May 2020"

imgPath 
------ 
Type: String
Example: "sample img"
Notes: Convert the image to PNG format and store it in /graphics/images

content
------ 
Type: .js file
Example: <SampleContent />
Notes: Create a .js file under /body/posts and export the post as a const. Contain it with the div tag "post-style". Refer to /pages/SampleContent for an example

*/

export const TypographyLogosPosts = () => {

    return (
        <>
        <Post />
        <Post />
        <Post />
        </>
    )
}