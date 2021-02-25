import React, { Component } from 'react'

import '../styles/Contact.css'
import ContactImage from './smallerComponents/ContactImage'


export default class Contact extends Component {

    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let userName = JSON.stringify(this.state.name);


        // fetch('/api/formData', {
        //     method: 'POST',
        //     body: userName,
        // })
        //     .then(console.log(userName))
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

                        <form onSubmit={this.handleSubmit} action="/api/formData" className="contact__form">
                            <input className="contact__form--input" value={this.state.name} onChange={this.onChange} type="text" name="name" placeholder="NAME" />

                            <input className="contact__form--input" value={this.state.email} onChange={this.onChange} type="email" name="email" placeholder="EMAIL" />

                            <textarea className="contact__form--input contact__form--message" value={this.state.message} onChange={this.onChange} placeholder="YOUR MESSAGE" cols="80" type="textarea" name="message" />
                            <input className="contact__form--input contact__form--send" type="submit" value="SEND" />
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