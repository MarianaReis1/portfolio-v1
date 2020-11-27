import { Link } from 'react-router-dom'


import './ProjectPage.css'
import IconGithub from '../media/IconGithub'
import IconNewWindow from '../media/IconNewWindow'
import Button from './smallComponents/Button'


export default function ProjectPage(props) {
    console.log(props.data)
    console.log(props)
    return (

        <section className="projectPage">
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
            <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

            <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
            <h1 className="projectPage__title">{props.data.title}</h1>
            <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>

            <img src={props.data.imgSrc} className="projectPage__img" alt={props.data.gitAlt} />
            <div className="projectPage__subtitle">
                {props.data.tools}
            </div>
            <div className="projectPage_icons">
                <IconGithub />
                <IconNewWindow />

            </div>
            <p className="projectPage_paragraph">
                {props.data.description}
            </p>
            <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>

            <Link to="/projects"><Button className="projects__download-button">GO BACK</Button></Link>

        </section >

    )
}
