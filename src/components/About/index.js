import styled from "styled-components";

const About = ({content}) => {
    const foundPage = content.find((contentPage) => {
        return contentPage.page === "About";
    })
    return (
        <>
            <h2>About Me</h2>
            {
                foundPage.texts.map((text,index) => {
                    return (
                        <p key={index}>{text}</p>
                    )
                })
            }
            <ImgContainer>
                <StyledImg src="/my-portfolio/assets/kevin-picture2.jpg" alt="Picture of Kevin in Japan" />
            </ImgContainer>
        </>
    )
}

const ImgContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    @media (min-width: 640px) {
        justify-content: center;
    }
`

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    margin: 1rem;
    border: 2px solid var(--color2);

    @media (min-width: 1024px) {
    width: 250px;
    }
`

export default About