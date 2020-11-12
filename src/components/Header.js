import React, { useState } from 'react';
import './Header.css'
import Logo from '../media/logo-green.png';
import IconGithub from '../media/IconGithub';
import IconLinkedin from '../media/IconLinkedin';
import IconEmail from '../media/IconEmail';
import BurguerIcon from '../media/burguer-icon.png';
import XIcon from '../media/x-icon.png';


export default function Header(){

    const [isActive, setActive] = useState("false")
    const handleShowMenu = () => {
        setActive(!isActive)
    }

    let isMobileSize = window.innerWidth < 768;
    
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="Logo" >
                {/* <a href="/home" ></a> */}
            </img>
            <ul className={isMobileSize && !isActive ? "header__list" : "header__list--desktop header__list--hidden" }>
                <li className="header__item">about</li>
                <li className="header__item">projects</li>
                <li className="header__item header__item--icon">
                    <IconGithub />
                </li>
                <li className="header__item header__item--icon header__icon-email">
                    <IconEmail className="header__icon-email" />
                        <span className="header__icon-email--tooltip">Tooltip here</span>
                </li>
                <li className="header__item header__item--icon">
                    <IconLinkedin />
                </li>
            </ul>
            <div className="header__burguer-icon" >
                <a>
                    <img className="header__burguer-icon-img" onClick={() => handleShowMenu()} src={isActive ? BurguerIcon : XIcon} alt="Hamburguer Icon" />
                </a>
            </div>
        </div>
    )
}

// to do list :
    // add links
    // add tooltip Text
    // add function onclick li email item to coppy my email 
    // mobile and tablet version
