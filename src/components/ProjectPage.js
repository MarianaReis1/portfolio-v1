// import './ProjectPage.css'
import { projectsList } from './Projects'
import Header from './Header'
import Button from './Button'
import IpTracker from './Projects__IpTracker'
import PauseMe from './Projects__PauseMe'
import Insure from './Projects__Insure'


export default function ProjectInfo (){
    console.log(projectsList)
    return (
        <section>
            <Header />
            <section className="projects">
                <p className="projects__code-caracters projects__code-caracters--html">&#60;html&#62;</p>
                <p className="projects__code-caracters content__code-caracters--body">&#60;body&#62;</p>
                
                <p className="projects__code-caracters projects__code-caracters--h2">&#60;h2&#62;</p>
                    <p className="projects__title">Welcome to {projectsList[0].title} InfoPage</p>
                <p className="projects__code-caracters projects__code-caracters--h2">&#60;/h2&#62;</p>
                
                    <section className="projects__grid">
                        <IpTracker data={projectsList[0]} />
                        <PauseMe data={projectsList[1]} />
                        <Insure  data={projectsList[2]} />
                    
                    </section>
                    <Button className="projects__download-button">DOWNLOAD CV</Button>
                <p className="projects__code-caracters content__code-caracters--body">&#60;/body&#62;</p>
                
            </section>
        </section>
    )
}
