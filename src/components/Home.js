import './Home.css'
import Image from '../media/main-img-home.png'
import Button from './smallComponents/Button'


export default function Home() {

    return (

        <section className="home">
            <img src={Image} className="home__img--desktop" alt="MultiTask Girl" />
            <div className="home__content">
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
                <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

                <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
                <h1 className="home__title">Hey There, I’m <span>Mariana Reis</span></h1>
                <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>
                <p className="general__code-caracters general__code-caracters--h3">&#60;h3&#62;</p>
                <p className="home__subtitle">Front-end Web Developer</p>
                <p className="general__code-caracters general__code-caracters--h3">&#60;/h3&#62;</p>
                <Button className="home__contact-button">CONTACT ME</Button>

                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
                <p className="general__code-caracters general__code-caracters--html">&#60;/html&#62;</p>
                <img src={Image} className="home__img" alt="MultiTask Girl" />

            </div>
        </section>

    )
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect