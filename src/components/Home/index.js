import styled from "styled-components";

const Home = () => {
    return (
        <>
            <TitleContainer>
                <h2>Hello, <br/> I'm Kevin Lo</h2>
                <StyledImg src="/assets/kevinPicture.jpg" alt="Picture of Kevin" />
            </TitleContainer>
            <p>I'm a Full-Stack Developer in training with a passion for making dreams into reality.</p>
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
