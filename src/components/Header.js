import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import '../styles/Header.css'
import '../styles/general__styles.css'

import Logo from '../media/logo.png'
import IconBurguer from '../media/iconBurguer.png'
import IconX from '../media/iconX.png'
import IconWorks from './icons/IconWorks'
import IconAbout from './icons/IconAbout'
import IconEmail from './icons/IconEmail'
import IconGithub from './icons/IconGithub'
import IconLinkedin from './icons/IconLinkedin'


function copyEmailToClipboard() {
    const email = document.querySelector('#email');
    let tooltipMessage = document.querySelector('.header__item--email-tooltipMessage');

    email.select()
    document.execCommand("copy");
    console.log(tooltipMessage.innerHTML)
    tooltipMessage.innerHTML = "Email Copied"
}

export default function Header() {

    const [isActive, setActive] = useState("false")
    const handleShowMenu = () => {
        setActive(!isActive)
    }

    let isMobileSize = window.innerWidth < 768;

    return (
        <div className="header">
            <Link to="/" ><img className="header__logo" src={Logo} alt="Logo" /></Link>
            <ul className={isMobileSize && !isActive ? "header__list" : "header__list--desktop header__list--hidden"}>
                <Link to="/about">
                    <li className="header__item">
                        <IconAbout />
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="header__item">
                        <IconWorks />
                    </li>
                </Link>
                <li className="header__item header__item--email">
                    <Link to="/contact">
                        <IconEmail className="header__item--email" />
                    </Link>
                    <span className="header__item--email-tooltip" onClick={() => copyEmailToClipboard()}>
                        <p className="header__item--email-tooltipMessage">You can click <strong>here</strong> to copy my email or on the icon to go to contact page!</p>
                        <input id="email" type="text" value="marianaluizamr@gmail.com" readOnly></input>
                    </span>
                </li>
                <a href="https://github.com/MarianaReis1" target="_blank" rel="noreferrer">
                    <li className="header__item">
                        <IconGithub />
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/mariana-reis-mr/" target="_blank" rel="noreferrer">
                    <li className="header__item">
                        <IconLinkedin />
                    </li>
                </a>
            </ul>

            <div className="header__burguerX-icon" >
                <img className="header__burguerX-icon-img" onClick={() => handleShowMenu()} src={isActive ? IconBurguer : IconX} alt="Hamburguer Icon" />
            </div>
        </div>
    )
}
