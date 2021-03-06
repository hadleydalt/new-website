import '../../App.css';

export const Dash = () => {

    return (
       <div className="post-style">
           <p><h>Overview</h></p>
           <p>DASH is an IDE for document-based networks developed by <a href="https://cs.brown.edu/people/avandam/"><u>Andy Van Dam</u></a> at Brown University. You can explore it <a href="http://ptc.cs.brown.edu/#/project/dash"><b><u>here</u></b></a>.
I was challenged to code my own version of DASH using <b>TypeScript</b>, <b>React</b>, and <b>SCSS</b>, which I had no prior familiarity with. I used this challenge as an opportunity to propose some suggestions for a <b>hypothetical redesign of the existing web app.</b> </p>

<p><b><u>Why this redesign?</u></b></p>
<p>Experimenting with DASH, I noticed several features of the UI which made it <b>difficult to navigate and use</b>. I decided to improve upon this issues by simplifying the functionality of DASH to make it more <b>user-friendly</b>.</p>
<p><h>Defining the problem</h></p>
<p>I began by conducting an analysis of the existing web app and identifying some <b>"pain points"</b> that make usability difficult. Unfortunately, the <b>time limitations</b> did not permit me to garner feedback about DASH from <b>other potential users</b>. However, if I had been given more time, I would have included this step in my analysis. </p>

<p><b>Note:</b> For your understanding, DASH enables users to populate textual "notes" and files onto an unbounded 2D freeform canvas.</p>

<p><img src={require("../../graphics/images/dash_1.png")} style={{width: '100%'}} /></p>

<p><h>Design process</h></p>
<p><b><u>Design Goals</u></b></p>
<p>I concluded that the primary goal of this redesign should be to</p>
<p><b>1) implement the basic functionalities of DASH</b></p>
<p><b>2) address each of the pain points to make the app easier to navigate and use</b></p>

<p>To tackle Goal 1, I began by breaking up DASH's functionality into four components:</p>

<img src={require("../../graphics/images/dash_2.png")} style={{width: '50%'}} />

<p>To address Goal 2, I first created an <b>affinity diagram</b> to map each pain point with its potential solutions.</p>

<img src={require("../../graphics/images/dash_3.png")} style={{width: '100%'}} />

<p><b><u>Wireframe and Prototype</u></b></p>

<p>Synthesizing my findings, I proceeded to make a wireframe sketch that <b>integrated the four goal functionalities</b> of DASH while also <b>addressing the pain points</b>. </p>

<img src={require("../../graphics/images/dash_4.png")} style={{width: '40%'}}/>

<p>I then transferred the sketch to a prototype in Figma...</p>

<img src={require("../../graphics/images/dash_5.png")} style={{width: '40%'}}/>

<p>The next step was to code the??functional web app using React, TypeScript, and SCSS.</p>

<p><h>The final result</h></p>

<p>These are some screenshots of the final result, and a diagram highlighting <b>how my solution aims to amend to the usability issues</b> posed by the original DASH.</p>

<p><b><u>Screenshots of Result</u></b></p>

<img src={require("../../graphics/images/dash_6.png")} style={{width: '100%'}}/>

<p><b><u>Diagram of Solution and Functionalities</u></b></p>

<img src={require("../../graphics/images/dash_7.png")} style={{width: '100%'}}/>
<img src={require("../../graphics/images/dash_8.png")} style={{width: '100%'}}/>

<p><h>Video Tours of the Result</h></p>

<p><b><u>Create Notes, Move and Resize:</u></b> The user is able to populate the screen with "notes" onto which they can add text, images, videos, or support HTML iFrames (websites with clickable links).</p>

<video autoPlay muted loop id="video" style={{width: '40%'}}>
    <source src={require("../../graphics/images/dash_9.mov")} type="video/mp4" />
</video>

<p><b><u>Create Collections and Nested Collections:</u></b> The user can also create collections to store additional notes. Collections may be nested inside collections. </p>

<video autoPlay muted loop id="video" style={{width: '40%'}}>
    <source src={require("../../graphics/images/dash_10.mov")} type="video/mp4" />
</video>

<p><b><u>Linking Notes Together:</u></b> Finally, the user can link notes by creating and naming "Folders" which store up to three notes. If a note has been added to a folder, the user has the option to click on and access the other contents that have been stored within that folder. </p>

<video autoPlay muted loop id="video" style={{width: '40%'}}>
    <source src={require("../../graphics/images/dash_11.mov")} type="video/mp4" />
</video>

        </div>
    )
}