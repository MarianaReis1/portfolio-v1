import React, { Component } from 'react'
import emailjs from 'emailjs-com';

import '../styles/Contact.css'
import ContactImage from './smallerComponents/ContactImage'


export default class Contact extends Component {
    state = {
            name: '',
            email: '',
            message: ''
        }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const confirmationMessage = document.querySelector('.contact__form--confirmation')

        emailjs.sendForm('service_huq07lr', 'template_ovvbs2q', e.target, 'user_Klq09IO9kfkda4XACaeEU')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        .then(
            confirmationMessage.style.display = "block"    
        )
        .then(
            setTimeout(() => {
                confirmationMessage.style.display = "none"
            }, 6000)
        )
        .then(
            this.setState({ 
                name: '',
                email: '',
                message: ''
            })
        )
        
        e.target.reset()
    }

    render() {
        return (
            <section className="contact">
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
                <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

                <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
                <h1 className="contact__title">Contact me</h1>
                <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>

                <div className="contact__wrapper">
                    <section className="contact__content">
                        <p className="contact_paragraph">
                            If you have any questions, please, feel free to send an email to <u>marianaluizamr@gmail.com</u> or reach out through the form below.
                        </p>

                        <form method="POST" action="/form" onSubmit={this.onSubmit} className="contact__form">
                            <input className="contact__form--input" value={this.state.name} required onChange={this.onChange} type="text" name="name" placeholder="NAME" />

                            <input className="contact__form--input" value={this.state.email} required onChange={this.onChange} type="email" name="email" placeholder="EMAIL" />

                            <textarea className="contact__form--input contact__form--message" required value={this.state.message} onChange={this.onChange} placeholder="YOUR MESSAGE" cols="80" type="textarea" name="message" />
                            <input className="contact__form--input contact__form--send" type="submit" value="SEND" />
                            <div className="contact__form--confirmation" >Message Sent!<br/>Thanks</div>
                        </form>
                    </section>

                    <ContactImage className="contact__img" />
                </div>
                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
                <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
            </section>
        )
    }
}