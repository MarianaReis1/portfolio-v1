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
                <p className="home__code-caracters home__code-caracters-html">&#60;html&#62;</p>    
                <p className="home__code-caracters home__code-caracters--body">&#60;body&#62;</p>    
                        <p className="home__code-caracters home__code-caracters--h2">&#60;h2&#62;</p>
                            <p className="home__title">Hey There, <br/> I’m Mariana Reis</p>
                        <p className="home__code-caracters home__code-caracters--h2">&#60;/h2&#62;</p>
                        <p className="home__code-caracters home__code-caracters--h3">&#60;h3&#62;</p>
                            <p className="home__subtitle">Front-end Web Developer</p>
                        <p className="home__code-caracters home__code-caracters--h3">&#60;/h3&#62;</p>
                        <p className="home__code-caracters home__code-caracters--p">&#60;p&#62;</p>
                            <p className="home__para">
                                I’m based in London, UK and passionate about learning new skills and writting clean and efficient code. Always focusing on Responsive Web .... tech details.
                                I have a diverse skill set raging from HTML, CSS, SASS, BEM 
                                You can read more about my skills, education and much more in the pdf attached bellow |
                            </p>
                        <p className="home__code-caracters home__code-caracters--p">&#60;/p&#62;</p>
                        <button >Download My Resume</button>
                <p className="home__code-caracters home__code-caracters--body">&#60;/body&#62;</p>
                <p className="home__code-caracters home__code-caracters-html">&#60;/html&#62;</p>    

            </div>
        </section>
    
    </section>
)
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect