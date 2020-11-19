// import './Projects.css'
import Button from './smallComponents/Button'
import IpTracker from './Projects__IpTracker'
import PauseMe from './Projects__PauseMe'
import Insure from './Projects__Insure'



export const projectsList = [
    {
        title: "IP Tracker WebApp",
        name: "ipTracker",
        tools: "REACTJS | IPA | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "Ip Tracker Gif",
        imgSrc: "../media/IpTrackerImg.png"
    },
    {
        title: "PauseMe WebApp",
        name: "pauseMe",
        tools: "REACTJS | IPA | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "PauseMe Gif"
    },
    {
        title: "Insure WebPage",
        name: "insure",
        tools: "VANILLA JS | BEM | SASS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "insure Gif"
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
                <IpTracker data={projectsList[0]} />
                <PauseMe data={projectsList[1]} />
                <Insure data={projectsList[2]} />

            </section>
            <Button className="projects__download-button">DOWNLOAD CV</Button>
            <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>

        </section>

    )
}
