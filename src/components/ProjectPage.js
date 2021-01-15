import { Link } from 'react-router-dom'


import './ProjectPage.css'
import IconGithub from '../media/IconGithub'
import IconNewWindow from '../media/IconNewWindow'
import Button from './smallComponents/Button'


export default function ProjectPage(props) {
    console.log(props.data)
    console.log(props)

    return (

        <section className="projectPage__content">
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
            <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

            <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
            <h1 className="projectPage__title">{props.data.title}</h1>
            <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>

            <img src={props.data.imgSrc} className="projectPage__img" alt={props.data.gitAlt} />
            <div className="projectPage__tools">
                {props.data.tools}
            </div>
            <div className="projectPage_icons">
                <Link to={props.data.link}><IconGithub /></Link>
                <IconNewWindow />

            </div>
            <section>
                <p className="projectPage_paragraph">
                    {props.data.description}
                </p>
                <p className="projectPage__techSheet">TECHNICAL SHEET:</p>
                <ul className="projectPage__techSheet--list">
                    {props.data.techSheet.map((tech) => (
                        <li key={tech} className="projectPage__techSheet--items">
                            {tech}
                        </li>
                    ))}
                </ul>
            </section>

            <Link to="/projects"><Button className="projectPage__goBack">GO BACK</Button></Link>
            <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
        </section >

    )
}
