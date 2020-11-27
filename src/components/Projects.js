import React from 'react';
// import { BrowserRouter } from 'react-router-dom'
import './Projects.css'
import ProjectsCard from './ProjectsCard'
import Button from './smallComponents/Button'

export const projectsList = [
    {
        title: "IP Tracker WebApp",
        name: "ipTracker",
        tools: "REACTJS | IPA | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "Ip Tracker Gif",
        imgSrc: "/IpTrackerImg.png",
        path: "/projects/ipTracker"
    },
    {
        title: "PauseMe WebApp",
        name: "pauseMe",
        tools: "REACTJS | IPA | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "PauseMe Gif",
        imgSrc: "/PausemeImg.png",
        path: "/projects/pauseMe"
    },
    {
        title: "Insure WebPage",
        name: "insure",
        tools: "VANILLA JS | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "insure Gif",
        imgSrc: "/InsureImg.png",
        path: "/projects/insure"
    }
]

export default function Projects() {

    return (
        <section className="projects">
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

            <Button className="projects__download-button">DOWNLOAD CV</Button>
            <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>

        </section>
    )
}
