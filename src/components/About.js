import '../styles/About.css'
import AboutImage from './smallerComponents/AboutImage'
import Button from './smallerComponents/Button'


export default function HomeContent() {
    let isDesktop = window.innerWidth > 1024;
    return (
        <section className="about">
            { isDesktop ? <AboutImage className="about__img"/> : ""}
            <div className="about__content">
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
                <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>
                <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
                <h1 className="about__title">About me</h1>
                <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>
                <p className="general__code-caracters general__code-caracters--p">&#60;p&#62;</p>
                <div className="about__paragraph">
                    <p>Hey There!</p>
                    <p>I am a Full-Stack Web Developer based in London and currently finishing a Master's Degree in Full Stack Web Development.</p><br></br>
                    <p>I enjoy making responsive, friendly, and functional web applications with a simple and distinct design. And I am always looking forward to learning new technologies and getting to know new people.</p><br></br>
                    <p>For over a year, I have been experiencing and making the best use of ReactJS, NodeJS technologies and other frameworks and adjacent libraries such as ExpressJs. Here you will find a showcase of some projects I have been working on in the past few months.</p><br></br>
                    <p>When not coding, I enjoy spending time with friends, family and play tennis.</p>
                </div>
                <p className="general__code-caracters general__code-caracters--p">&#60;/p&#62;</p>
                <a href="/CV_MarianaReis_WebDev.pdf" download="">
                    <Button className="about__download-button">DOWNLOAD CV</Button>
                </a>
                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
                <p className="general__code-caracters general__code-caracters--html">&#60;/html&#62;</p>
            </div>
        </section>
    )
}

