import '../App.css';
import { Post } from '../body/Post'
import { Dash } from './swe-ux-content/Dash';
import { BostonAI } from './swe-ux-content/BostonAI';
import { Soma } from './swe-ux-content/Soma';


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

export const SWEUXPosts = () => {

    return (
        <>
        <Post 
            tags={["React", "TypeScript", "SCSS", "Frontend", "UI/UX"]}
            title="DASH: Web App Redesign"
            date="May 2021"
            imgPath="dash cover"
            content={<Dash />}
        />
        <Post 
            tags={["UI/UX", "Prototyping", "Figma", "User research"]}
            title="Web Design for Boston AI Labs"
            date="July 2021"
            imgPath="bostai cover"
            content={<BostonAI />}
        />
        <Post 
            tags={["React Native", "JavaScript", "Frontend", "Full stack"]}
            title="Soma (the App)"
            date="present"
            imgPath="soma"
            content={<Soma />}
        />
        </>
    )
}