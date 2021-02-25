import React from 'react'
import { Link } from 'react-router-dom'

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
        description: "IpTracker is a beatiful simple Webapp to help you track IP and URLs. The UI/UX was concieved with a mobile first approach, taking advantage of ReactJs’s tools to keep it simple and to make best and fastes use of the API.",
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
        description: `PauseMe is a breath guide web application.
        The idea to build this web app came when I was starting to learn JavaScript, along with RESPONSIVE DESIGN and DESIGN SYSTEM. 
        Currently, I am working on the second phase of this project: a ReactJS PauseMe, where we can have a scalable and improved application.
        The main focus will be to expand the possibilities, such as allowing the inclusion of new scenes from the user side, 
        having the option to turn off the breath guide, change the volume of the video, and so on.
        `,

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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        techSheet: ["html5", "css3", "sass", "javascript", "git", "github"]
    },
    {
        title: "Portfolio",
        name: "portfolio",
        path: "/projects/portfolio",
        imgSrc: "/PortfolioImg.png",
        imgAlt: "portfolio Gif",
        link: "https://portfolio-ten-snowy.vercel.app/",
        githubLink: "https://github.com/MarianaReis1/portfolio",


        tools: "REACTJS | FIGMA | SASS ",
        description: "This UI/UX was concieved with a mobile first approach. The idea behind this was to create a showcase of the projects that I have been working on in the past few months. The UI and the code behind it was kept simple, so the focus could go to the advantages that ReactJs can provide for simple applications.",
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
                        <Link to={`/projects/${proj.name}`}><ProjectsCard
                            data={proj}
                            key={proj.name}
                        /></Link>
                    ))
                }
            </section>

            <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>

        </section>
    )
}
