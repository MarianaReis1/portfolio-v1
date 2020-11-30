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


        tools: "REACTJS | IPA | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
    },
    {
        title: "PauseMe WebApp",
        name: "pauseMe",
        path: "/projects/pauseMe",
        imgSrc: "/PausemeImg.png",
        imgAlt: "PauseMe Gif",


        tools: "REACTJS | IPA | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
    },
    {
        title: "Insure WebPage",
        name: "insure",
        path: "/projects/insure",
        imgSrc: "/InsureImg.png",
        imgAlt: "insure Gif",


        tools: "VANILLA JS | CSS3 | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
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
