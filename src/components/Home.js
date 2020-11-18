import './Home.css'
import Image from '../media/main-img-home.png'
import Header from './Header'
import Button from './Button'


export default function Home (){

return (

    <section className="home">
        <img src={Image} className="home__img--desktop" alt="MultiTask Girl" />
        <div className="home__content">
            <p className="home__code-caracters home__code-caracters-html">&#60;html&#62;</p>    
            <p className="home__code-caracters home__code-caracters--body">&#60;body&#62;</p>        
                <div className="home__middle-content">
                    <p className="home__code-caracters home__code-caracters--h2">&#60;h2&#62;</p>
                    <p className="home__title"><span>Hey There,</span><span> I’m Mariana Reis</span></p>
                    <p className="home__code-caracters home__code-caracters--h2">&#60;/h2&#62;</p>
                    <p className="home__code-caracters home__code-caracters--h3">&#60;h3&#62;</p>
                        <p className="home__subtitle">Front-end Web Developer</p>
                    <p className="home__code-caracters home__code-caracters--h3">&#60;/h3&#62;</p> 
                    <Button className="home__contact-button">CONTACT ME</Button>
                </div>
            <p className="home__code-caracters home__code-caracters--body-close">&#60;/body&#62;</p>
            <p className="home__code-caracters">&#60;/html&#62;</p>    
            <img src={Image} className="home__img" alt="MultiTask Girl" />

        </div>
    </section>

)
}

// to do 
    //include typewriter effect maybe using this > npm i typewriter-effect