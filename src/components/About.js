import './About.css'
import Image from '../media/main-img-home.png'
import Button from './smallComponents/Button'


export default function HomeContent() {
    return (
        <section className="about">
            <img src={Image} className="about__img" alt="MultiTask Girl" />
            <div className="about__content">
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
                <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>
                <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
                <h1 className="about__title">About me</h1>
                <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>
                <p className="general__code-caracters general__code-caracters--p">&#60;p&#62;</p>
                <p className="about__paragraph">
                    Hello,
                    <br></br>
                    My name is Mariana Reis and I am a Software Developer.
                    <br></br>
                    Currently pursuing a Master’s Degree in Full Stack Web Development to expand skills and keep up-to-date on the industry's trends.
                    <br></br>
                    Beyond that, I have been challenging myself in the Web Develpment World for over a year, always focusing on responsive designs and friendly-clean codes.
                </p>
                <p className="general__code-caracters general__code-caracters--p">&#60;/p&#62;</p>
                <Button className="about__download-button">DOWNLOAD CV</Button>
                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
                <p className="general__code-caracters general__code-caracters--html">&#60;/html&#62;</p>
            </div>
        </section>
    )
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect
