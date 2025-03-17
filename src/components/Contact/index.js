import styled from "styled-components"

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <p>For all inquiries, please contact me through email</p>
            <MyEmail>kevinkarholo@gmail.com</MyEmail>
            <p>Or check out my social handles</p>
            <form></form>
        </>
        
    )
}

const MyEmail = styled.p`
    color: var(--color2);
    font-weight: 700;
    text-align: center;
    width: 350px;
    border: 1px solid var(--color2);
    margin: 1rem auto;
    -webkit-box-shadow:0px 0px 105px 40px rgba(91,192,190,0.49);
    -moz-box-shadow: 0px 0px 105px 40px rgba(91,192,190,0.49);
    box-shadow: 0px 0px 105px 40px rgba(91,192,190,0.49);
`

export default Contact