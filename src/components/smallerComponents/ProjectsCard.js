import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import IconGithub from '../icons/IconGithub'
import IconMoreInfo from '../icons/IconMoreInfo'
import IconNewWindow from '../icons/IconNewWindow'


export default function ProjectsCard(props) {

    let [hasImage, setHasImage] = useState('');

    useEffect((hasImage) => {
        if (hasImage !== '') {
            setHasImage(props.data.imgSrc)
        }
    }, [props.data.imgSrc])

    return (

        <div className="projects__items" >
            <img className="projects__items--img" src={hasImage} alt={props.data.imgAlt} />
            <h4 className="projects__items--title">{props.data.title}</h4>
            <h6 className="projects__items--subtitle">{props.data.tools}</h6>
            <div className="projects__icons--grid">
                <Link to={`/projects/${props.data.name}`} className="projects__icons"><IconMoreInfo /></Link>
                <a href={props.data.githubLink} className="projects__icons" target="_blank" rel="noreferrer"><IconGithub /></a>
                <a href={props.data.link} className="projects__icons" target="_blank" rel="noreferrer"><IconNewWindow /></a>
            </div>
        </div>

    )
}