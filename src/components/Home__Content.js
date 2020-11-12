import './Home__Content.css'
import Image from '../media/main-img-home.png'
import Header from './Header'


export default function HomeContent (){
console.log(window.innerWidth)
return (
    <section>
        <Header />
        <section className="home">
            <img src={Image} className="home__img" alt="MultiTask Girl" />
            <div className="home__content">
                <p className="home__code-caracters home__code-caracters--open-tag">&#60;body&#62;</p>    
                        <p className="home__code-caracters">&#60;h2&#62;</p>
                            <h2 className="home__title">Hey There, <br/> I’m Mariana Reis</h2>
                        <p className="home__code-caracters">&#60;/h2&#62;</p>
                        <p className="home__code-caracters">&#60;h3&#62;</p>
                            <h3 className="home__subtitle">Front-end Web Developer</h3>
                        <p className="home__code-caracters">&#60;/h3&#62;</p>
                        <p className="home__code-caracters">&#60;p&#62;</p>
                            <p className="home__para">
                                I’m based in London, UK and passionate about learning new skills and writting clean and efficient code. Always focusing on Responsive Web .... tech details.
                                I have a diverse skill set raging from HTML, CSS, SASS, BEM 
                                You can read more about my skills, education and much more in the pdf attached bellow |
                            </p>
                            <p className="home__code-caracters home__code-caracters--a">&#60;a href="myResume" target="_blank"&#62;</p>
                            <p className="home__resume">My Resume</p>
                        <p className="home__code-caracters home__code-caracters--a">&#60;/a&#62;</p>
                        <p className="home__code-caracters">&#60;/p&#62;</p>
                <p className="home__code-caracters home__code-caracters--close-tag">&#60;/body&#62;</p>

            </div>
        </section>
    
    </section>
)
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect