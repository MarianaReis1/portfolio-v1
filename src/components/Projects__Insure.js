// import insure gif/img
import IpTrackerImg from '../media/IpTrackerImg.png'
import IconMoreInfo from '../media/IconMoreInfo'
import IconGithub from '../media/IconGithub'
import IconNewWindow from '../media/IconNewWindow'

export default function Insure (props) {
    return (
        <div className="projects__items" >
            <img className="projects__items-img" src={IpTrackerImg} alt={props.data.gifAlt} />
            <h4 className="projects__items-title">{props.data.title}</h4>
            <h6 className="projects__items-subtitle">{props.data.tools}</h6>
            <div className="projects__icons">
                <a><IconMoreInfo className="projects__icons-github" /></a>
                <a><IconGithub className="projects__icons-github" /></a>
                <a><IconNewWindow className="projects__icons-github" /></a>
            </div>
        </div>
    )
}