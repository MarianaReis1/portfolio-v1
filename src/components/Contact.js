import { useState } from 'react'
import './Projects.css'
import './Contact.css'
import Input from './smallComponents/Input'
import LabelText, { Label } from './smallComponents/LabelText'

export default function Contact() {

    let [isValue, setIsValue] = useState("");
    let [isEmail, setIsEmail] = useState("");
    let [isMessage, setIsMessage] = useState("");


    const nameHasValue = Boolean(isValue.length);
    const emailHasValue = Boolean(isEmail.length);
    const messageHasValue = Boolean(isMessage.length);

    return (
        <section className="contact">
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
            <p className="general__code-caracters general__code-caracters--body">&#60;body&#62;</p>

            <p className="general__code-caracters general__code-caracters--h1">&#60;h1&#62;</p>
            <h1 className="contact__title">Contact me</h1>
            <p className="general__code-caracters general__code-caracters--h1">&#60;/h1&#62;</p>

            <section className="contact__content">
                <p className="contact_paragraph">
                    If you have any questions, please, feel free to send an email to marianaluizamr@gmail.com or reach out through the form below.
                </p>

                <form className="contact__form" action="/contact.json">
                    <Input className="contact__form--name" type="text" name="name" value={isValue} onChange={(e) => setIsValue(isValue = e.target.value)} hasValue={nameHasValue} />
                    <Label for="name" className="contact__form--name-label"><LabelText>NAME</LabelText></Label>

                    <Input className="contact__form--email" type="email" name="email" value={isEmail} onChange={(e) => setIsEmail(isValue = e.target.value)} hasValue={emailHasValue} />
                    <Label for="email" className="contact__form--email-label"><LabelText>EMAIL</LabelText></Label>

                    <textarea className="contact__form--message" type="textarea" name="message" value={isMessage} onChange={(e) => setIsMessage(isValue = e.target.value)} hasValue={messageHasValue} />
                    <input className="contact__form--send" type="submit" value="SEND" />
                </form>
                <p className="general__code-caracters general__code-caracters--body">&#60;/body&#62;</p>
            </section>
            <p className="general__code-caracters general__code-caracters--html">&#60;html&#62;</p>
        </section>
    )
}