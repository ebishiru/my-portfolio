import styled from "styled-components"
import { setState } from "react-router-dom";
import { useState } from "react";

const Contact = () => {

    const [ visitorName, setVisitorName ] = useState("");
    const [ visitorEmail, setVisitorEmail ] = useState("");
    const [ visitorMessage, setVisitorMessage ] = useState("");

    const sendMail = () => {
        let emailParameters = {
            name: visitorName,
            email: visitorEmail,
            message: visitorMessage
        }
        emailjs.send("service_d4qmtes","template_rs3eh8o",emailParameters)
        .then(alert("Email Sent!"));
    }

    return (
        <ContactPage>
            <h2>Contact</h2>
            <p>For all inquiries, please contact me through email</p>
            <MyEmail>kevinkarholo@gmail.com</MyEmail>
            <p>Or leave me a message below!</p>
            <FormContainer>
                <label>Your Name
                    <input type="text" value={visitorName} onChange={(ev)=>{setVisitorName(ev.target.value)}}></input>
                </label>
                <label>Your Email
                    <input type="email" value={visitorEmail} onChange={(ev)=>{setVisitorEmail(ev.target.value)}}></input>
                </label>
                <label>Message
                    <textarea value={visitorMessage} onChange={(ev)=>{setVisitorMessage(ev.target.value)}}></textarea>
                </label>
                <SendButton type="submit" onClick={sendMail} disabled={!visitorName || !visitorEmail || !visitorMessage}>Send</SendButton>
            </FormContainer>
        </ContactPage>
    )
}

const ContactPage = styled.div`
    margin: 5rem 0;
`

const MyEmail = styled.p`
    color: var(--color2);
    font-weight: 700;
    text-align: center;
    width: 350px;
    border: 1px solid var(--color2);
    border-radius: 5px;
    margin: 1rem auto;
    -webkit-box-shadow:0px 0px 105px 40px rgba(91,192,190,0.49);
    -moz-box-shadow: 0px 0px 105px 40px rgba(91,192,190,0.49);
    box-shadow: 0px 0px 105px 40px rgba(91,192,190,0.49);
`

const FormContainer = styled.form`
    margin: auto;
    margin-top: 1rem;

    width: 450px;
    color: var(--color2);
    display: flex;
    flex-direction: column;
    gap: 10px;

    & input, & textarea {
        display: block;
        opacity: 0.8;
        margin: 0.5rem 0;
        width: 96%;
        padding: 0.5rem;
        border-radius: 5px;
    }

    & textarea {
        height: 8rem;
    }

`

const SendButton = styled.button`
    color: var(--color5);
    font-size: medium;
    background-color: var(--color2);
    margin: auto;
    padding: 0.5rem 1rem;
    border: 2px solid var(--color4);
    border-radius: 10px;

    &:disabled {
        opacity: 0.5;
    }
`

export default Contact