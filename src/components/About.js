import './About.css'
import Button from './smallComponents/Button'


export default function HomeContent() {
    return (
        <section className="about">
            <div className="about__content">
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
                <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>
                <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
                <h1 className="about__title">About me</h1>
                <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>
                <p className="general__code-caracters general__code-caracters--p">&#60;p&#62;</p>
                <p className="about__paragraph">
                    I’m based in London, UK and passionate about learning new skills and writting clean and efficient code. Always focusing on Responsive Web .... tech details.
                    I have a diverse skill set raging from HTML, CSS, SASS, BEM
                    You can read more about my skills, education and much more in the pdf attached bellow |
                            </p>
                <p className="general__code-caracters general__code-caracters--p">&#60;/p&#62;</p>
                <Button className="about__button">DOWNLOAD CV</Button>
                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
                <p className="general__code-caracters general__code-caracters--html">&#60;/html&#62;</p>
            </div>
        </section>
    )
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect
