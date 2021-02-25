import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'
import HomeImage from './smallerComponents/HomeImage'
import Button from './smallerComponents/Button'


export default function Home() {
    let isDesktop = window.innerWidth > 1024;
    return (
        <section className="home">
            { isDesktop ? <HomeImage className="home__img--desktop"/> : ""}
            <div className="home__content">
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
                <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

                <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
                <h1 className="home__title">
                    Hey There, I’m <span>Mariana Reis</span>
                </h1>
                <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>
                <p className="general__code-caracters general__code-caracters--h3">&#60;h3&#62;</p>
                <p className="home__subtitle">
                    Software Developer
                </p>
                <p className="general__code-caracters general__code-caracters--h3">&#60;/h3&#62;</p>
                <Link to="/projects"><Button className="home__viewWork-button">VIEW MY WORK</Button></Link>

                { isDesktop ? "" : <HomeImage className="home__img--tablet"/>}
                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
                <p className="general__code-caracters general__code-caracters--html">&#60;/html&#62;</p>

            </div>
        </section >

    )
}
