import React from 'react';
import './Header.css'
import Logo from '../media/logo-green.png';
import GithubIcon from '../media/IconGithub';
import LinkedinIcon from '../media/IconLinkedin';
import Emailicon from '../media/IconEmail';


export default function Header(){
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="Logo" >
                {/* <a href="/home" ></a> */}
            </img>
            <ul className="header__list">
                <li className="header__item">about</li>
                <li className="header__item">projects</li>
                <li className="header__item header__item--icon">
                    <GithubIcon />
                </li>
                <li className="header__item header__item--icon header__icon-email">
                    <Emailicon className="header__icon-email" />
                        <span className="header__icon-email--tooltip">Tooltip here</span>
                </li>
                <li className="header__item header__item--icon">
                    <LinkedinIcon />
                </li>
            </ul>
        </div>
    )
}

// to do list :
    // add links
    // add tooltip Text
    // add function onclick li email item to coppy my email 
