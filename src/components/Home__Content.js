import './Home__Content.css'
import Image from '../media/main-img-home.png'


export default function HomeContent (){

    return (

            <section className="content">
                <img src={Image} className="content__img" alt="MultiTask Girl" />
                <div className="content__text">
                    <p className="content__code-caracters">&#60;body&#62;</p>
                    <br/>
                        <h2 className="content__title">Hey There, I’m Mariana Reis</h2>
                        <h3 className="content__subtitle">Front-end Web Developer</h3>
                    <br/>
                        <p className="content__para">
                            I’m based in London, UK and passionate about learning new skills and writting clean and efficient code. Always focusing on Responsive Web .... tech details.
                            I have a diverse skill set raging from HTML, CSS, SASS, BEM 
                            You can read more about my skills, education and much more in the pdf attached bellow |
                        </p>
                        <br/>
                        <p className="content__para">My Resume</p>
                    <br/>
                    <p className="content__code-caracters content__code-caracters--close-tag">&#60;/body&#62;</p>

                </div>
            </section>

    )
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect