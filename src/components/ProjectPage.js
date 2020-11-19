import './Projects.css'
import './ProjectPage.css'
import { projectsList } from './Projects'
import IpTrackerImg from '../media/IpTrackerImg.png'
import IconGithub from '../media/IconGithub'
import IconNewWindow from '../media/IconNewWindow'
// import IpTracker from './Projects__IpTracker'
// import PauseMe from './Projects__PauseMe'
// import Insure from './Projects__Insure'


export default function ProjectInfo (){
    return (

        <section className="projectPage">
            <p className="projects__code-caracters projects__code-caracters--html">&#60;html&#62;</p>
            <p className="projects__code-caracters content__code-caracters--body">&#60;body&#62;</p>
            
            <p className="projects__code-caracters projects__code-caracters--h2">&#60;h2&#62;</p>
                <p className="projectPage__title">{projectsList[0].title} InfoPage</p>
            <p className="projects__code-caracters projects__code-caracters--h2">&#60;/h2&#62;</p>
            
            <img src={IpTrackerImg} className="projectPage__img" alt={projectsList[0].gitAlt} />
            <div className="projectPage__subtitle">
                {projectsList[0].tools}
            </div>
            <div className="projectPage_icons">
                <IconGithub />
                <IconNewWindow />

            </div>
            <p className="projectPage_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="projects__code-caracters content__code-caracters--body">&#60;/body&#62;</p>
            
        </section>
    )
}
