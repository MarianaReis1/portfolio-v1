import './About.css'
import Button from './Button'


export default function HomeContent (){
    return (
        <section className="about">
            <div className="about__content">
                <p className="about__code-caracters about__code-caracters--html">&#60;html&#62;</p>    
                <p className="about__code-caracters about__code-caracters--body">&#60;body&#62;</p>    
                        <p className="about__code-caracters about__code-caracters--h2">&#60;h2&#62;</p>
                            <p className="about__title">About me</p>
                        <p className="about__code-caracters about__code-caracters--h2">&#60;/h2&#62;</p>
                        <p className="about__code-caracters about__code-caracters--p">&#60;p&#62;</p>
                            <p className="about__paragraph">
                                I’m based in London, UK and passionate about learning new skills and writting clean and efficient code. Always focusing on Responsive Web .... tech details.
                                I have a diverse skill set raging from HTML, CSS, SASS, BEM 
                                You can read more about my skills, education and much more in the pdf attached bellow |
                            </p>
                        <p className="about__code-caracters about__code-caracters--p">&#60;/p&#62;</p>
                        <Button className="about__download-button">DOWNLOAD CV</Button>
                <p className="about__code-caracters about__code-caracters--body">&#60;/body&#62;</p>
                <p className="about__code-caracters about__code-caracters--html">&#60;/html&#62;</p>
            </div>
        </section>
    )
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect