import './Projects__Content.css'
import Header from './Header'
import IpTracker from './Projects__IpTracker'
import PauseMe from './Projects__PauseMe'


const projectsList = [
    {
        title: "IP Tracker Webapp",
        name: "IpTracker",
        tools: "REACTJS | IPA | BEM | SASS",
        quickDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "Ip Tracker Gif"
    },
    {
        title: "PauseMe Webapp",
        name: "pauseMe",
        tools: "REACTJS | IPA | BEM | SASS",
        quickDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna voluptate velit esse cillum dolore eu fugiat nulla.",
        gitAlt: "PauseMe Gif"
    }
]

export default function ProjectsContent (){

    return (
        <section>
            <Header />
            <section className="projects">
                <p className="projects__code-caracters">&#60;body&#62;</p>
                <br/>
                    <h2 className="projects__title">Welcome to my Projetcs</h2>
                <br/>
                    <section className="projects__grid">
                        <IpTracker data={projectsList[0]}/>
                        <PauseMe data={projectsList[1]}/>
                        <IpTracker data={projectsList[0]}/>
                        <PauseMe data={projectsList[1]}/>
                    
                    </section>
                <p className="projects__code-caracters content__code-caracters--close-tag">&#60;/body&#62;</p>
                
            </section>
        </section>
    )
}
