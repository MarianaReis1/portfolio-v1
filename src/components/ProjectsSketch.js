import IconGithub from '../media/IconGithub'
import IconMoreInfo from '../media/IconMoreInfo'
import IconNewWindow from '../media/IconNewWindow'
import IpTrackerImg from '../media/IpTrackerImg.png'


export default function ProjectsSketch(props) {
    console.log(props.data.imgSrc)
    return (
        <div className="projects__items" >
            <img className="projects__items-img" src={props.data.imgSrc} alt={props.data.gifAlt} />
            <h4 className="projects__items-title">{props.data.title}</h4>
            <h6 className="projects__items-subtitle">{props.data.tools}</h6>
            <div className="projects__icons">
                <a href="/"><IconMoreInfo className="projects__icons-github" /></a>
                <a href="/"><IconGithub className="projects__icons-github" /></a>
                <a href="/"><IconNewWindow className="projects__icons-github" /></a>
            </div>
        </div>
    )
}