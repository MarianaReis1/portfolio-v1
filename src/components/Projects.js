import React from 'react';

import './Projects.css'
import ProjectsCard from './ProjectsCard'

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
        techSheet: ["HTML5", "CSS3", "SASS", "BEM", "REACTJS", "API", "RESPONSIVE DESIGN", "ES6", "GIT", "GITHUB", "VERCEL"]
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
        description: `PauseMe is a breath guide web app. It has a friendly and clean UX Design. 
                        The idea to build this web app came when I was starting to learn Vanilla JavaScrip, Responsiveness, and Design Concepts, 
                        so this project allowed me to practice and improve these new abilities regularly. 
                        Currently, I am working on the second phase of this project: a ReactJS PauseMe, where we can have a scalable application. 
                        The main focus will be to expand the possibilities, such as allowing the inclusion of new scenes from the user side, having the option to turn off the breath guide, change the volume of the video, and so on.`,
        techSheet: ["javascript", "html5", "css3", "sass", "illustrator", "git", "github"] //        font-size: 1.2rem;

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
        techSheet: ["HTML5", "CSS3", "SASS", "BEM", "JAVASCRIPT", "RESPONSIVE DESIGN", "GIT", "GITHUB"]
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
        techSheet: ["REACTJS", "ES6", "FIGMA", "ILLUSTRATOR", "HTML5", "CSS3", "SASS", "BEM", "RESPONSIVE DESIGN", "GIT", "GITHUB", "VERCEL"]
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
