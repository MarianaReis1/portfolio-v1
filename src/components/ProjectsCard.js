import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IconGithub from '../media/IconGithub'
import IconMoreInfo from '../media/IconMoreInfo'
import IconNewWindow from '../media/IconNewWindow'


export default function ProjectsCard(props) {

    let [hasImage, setHasImage] = useState('');

    useEffect((hasImage) => {
        if (hasImage !== '') {
            setHasImage(props.data.imgSrc)
            console.log(props.data.imgSrc)
        }
    }, [props.data.imgSrc])

    return (

        <div className="projects__items" >
            <img className="projects__items-img" src={hasImage} alt={props.data.gifAlt} />
            <h4 className="projects__items-title">{props.data.title}</h4>
            <h6 className="projects__items-subtitle">{props.data.tools}</h6>
            <div className="projects__icons">
                <Link to={`/projects/${props.data.name}`}><IconMoreInfo className="projects__icons-github" /></Link>
                <a href="/"><IconGithub className="projects__icons-github" /></a>
                <a href="/"><IconNewWindow className="projects__icons-github" /></a>
            </div>
        </div>

    )
}