import React from 'react';

import './Projects.css'
import ProjectsCard from './ProjectsCard'

export const projectsList = [
    {
        title: "IP Tracker WebApp",
        name: "ipTracker",
        path: "/projects/ipTracker",
        imgSrc: "/IpTrackerImg.png",
        imgAlt: "Ip Tracker Gif",
        link: "http://ip-tracker.marianareis.co/",
        githubLink: "https://github.com/MarianaReis1/IpTrackerReact",


        tools: "REACTJS | API | SASS",
        description: "IpTracker is a beatiful simple Webapp to help you track IP and URLs. The UI/UX was concieved with a mobile first approach, taking advantage of ReactJs’s tools to keep it simple and to make best and fastes use of the API.",
        techSheet: ["HTML5", "CSS3", "SASS", "BEM", "REACTJS", "API", "RESPONSIVE DESIGN", "ES6", "GIT", "GITHUB"]
    },
    {
        title: "PauseMe WebApp",
        name: "pauseMe",
        path: "/projects/pauseMe",
        imgSrc: "/PausemeImg.png",
        imgAlt: "PauseMe Gif",
        link: "http://pauseme.marianareis.co/",
        githubLink: "https://github.com/MarianaReis1/pauseme-js",


        tools: "VANILLA JS | API | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        techSheet: ["HTML5", "CSS3", "SASS", "BEM", "API", "RESPONSIVE DESIGN", "ES6", "GIT", "GITHUB"]
    },
    {
        title: "Insure WebPage",
        name: "insure",
        path: "/projects/insure",
        imgSrc: "/InsureImg.png",
        imgAlt: "insure Gif",
        link: "https://marianareis1.github.io/insure/",
        githubLink: "https://github.com/MarianaReis1/insure",


        tools: "VANILLA JS | SASS | BEM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        techSheet: ["HTML5", "CSS3", "SASS", "BEM", "RESPONSIVE DESIGN", "GIT", "GITHUB"]
    },
    {
        title: "Portfolio",
        name: "portfolio",
        path: "/projects/portfolio",
        imgSrc: "/PortfolioImg.png",
        imgAlt: "portfolio Gif",
        link: "https://portfolio-ten-snowy.vercel.app/",
        githubLink: "https://github.com/MarianaReis1/portfolio",


        tools: "REACTJS | BEM | SASS",
        description: "This UI/UX was concieved with a mobile first approach. The idea behind this was to create a showcase of the projects that I have been working on in the past few months. The UI and the code behind it was kept simple, so the focus could go to the advantages that ReactJs can provide for simple applications.",
        techSheet: ["REACTJS", "ES6", "FIGMA", "ILLUSTRATOR", "HTML5", "CSS3", "SASS", "BEM", "RESPONSIVE DESIGN", "GIT", "GITHUB"]
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
