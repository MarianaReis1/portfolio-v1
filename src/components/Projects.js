import React from 'react'

import '../styles/Projects.css'
import ProjectsCard from './smallerComponents/ProjectsCard'

export const projectsList = [
    {
        title: "IP Tracker Web App",
        name: "ipTracker",
        path: "/projects/ipTracker",
        imgSrc: "/IpTrackerImg.png",
        imgAlt: "Ip Tracker Gif",
        link: "http://ip-tracker.marianareis.co/",
        githubLink: "https://github.com/MarianaReis1/IpTrackerReact",
        tools: "REACTJS | API | SASS",
        description: [
            "IpTracker is a user-friendly web application that helps you track IPs and URLs. This project was part of a challenge from Frontend Mentor.", 
            <br></br>,
            "I used Google API to get the IP Address locations and Google Maps JavaScript to generate the map. The UI was conceived with a mobile-first approach, taking advantage of ReactJs' tools to keep all styles and components simple and make the fastest use of the API."
        ],
        techSheet: ["html5", "css3", "sass", "react", "javascript", "git", "github"]
    },
    {
        title: "PauseMe Web App",
        name: "pauseMe",
        path: "/projects/pauseMe",
        imgSrc: "/PausemeImg.png",
        imgAlt: "PauseMe Gif",
        link: "http://pauseme.marianareis.co/",
        githubLink: "https://github.com/MarianaReis1/pauseme-js",
        tools: "JAVASCRIPT | SASS | ILLUSTRATOR",
        description: [
            "PauseMe is a breath guide Web Application that I built when I started to learn Design Systems and Responsive. ",
            "This project allowed me to implement the knowledge about user-friendly designs and, also, continue revisiting most of the EcmaScript6+ features.", 
            <br></br>,
            "The next move on this project is to expand the possibilities and create a ReactJS PauseMe, where it can be a scalable and upgraded application."
        ],
        techSheet: ["javascript", "html5", "css3", "sass", "illustrator", "git", "github"]

    },
    {
        title: "Insure Web Page",
        name: "insure",
        path: "/projects/insure",
        imgSrc: "/InsureImg.png",
        imgAlt: "insure Gif",
        link: "https://marianareis1.github.io/insure/",
        githubLink: "https://github.com/MarianaReis1/insure",
        tools: "JAVASCRIPT | SASS | BEM",
        description: ["This landing page was part of a challenge from Frontend Mentor, where I should build it according to the design system given, respecting the responsiveness required. To complete this challenge, I used HTML5 and CSS3 alongside SASS and VanillaJS to optimize the site's layout depending on their device's screen size and implemented BEM Methodology to write cleaner and more readable classes."],
        techSheet: ["html5", "css3", "sass", "javascript", "git", "github"]
    },
    {
        title: "Portfolio",
        name: "portfolio",
        path: "/projects/portfolio",
        imgSrc: "/PortfolioImg.png",
        imgAlt: "portfolio Gif",
        link: "https://marianareis.co/",
        githubLink: "https://github.com/MarianaReis1/portfolio",


        tools: "REACTJS | FIGMA | SASS ",
        description: ["This application was created using ReactJS + React Hooks. To build the design and the images, I used Figma + Illustrator. A combination of Pre-processor SASS + BEM Methodology helped me to manage the styles and animations. The application aimed to be responsive to all screen sizes, user-friendly and make the content easily accessible."],
        techSheet: ["react", "javascript", "illustrator", "html5", "css3", "sass", "git", "github"]
    }
]

export default function Projects() {

    return (
        <section className="projects__content">
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
            <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

            <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
            <h1 className="projects__title">Welcome to my Projects</h1>
            <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>
            <section className="projects__grid">
                {
                    projectsList.map((proj) => (
                        <ProjectsCard
                            data={proj}
                            key={proj.name}
                        />
                    ))
                }
            </section>

            <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>

        </section>
    )
}
