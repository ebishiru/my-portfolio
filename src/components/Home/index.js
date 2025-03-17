import styled from "styled-components";

const Home = ({content}) => {
    const foundPage = content.find((contentPage) => {
        return contentPage.page === "Home";
    })
    return (
        <>
            <TitleContainer>
                <h1>Hello, <br/> I'm Kevin Lo</h1>
                <StyledImg src="/assets/kevin-picture.jpg" alt="Picture of Kevin" />
            </TitleContainer>
            {
                    foundPage.texts.map((text, index) => {
                        return (
                            <p key={index}>{text}</p>
                        )
                    })
            }
            <p>Click the tabs above to learn more about me!</p>
        </>

    )
}

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledImg = styled.img`
    margin: 0 1rem;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
`

export default Home
