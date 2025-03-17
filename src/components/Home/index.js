import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = ({content}) => {
    const foundPage = content.find((contentPage) => {
        return contentPage.page === "Home";
    })
    return (
        <HomePageContent>
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
            <p>Click the <SpecialWord>tabs</SpecialWord> above to learn more about me!</p>
            <SocialsContainer>
                <li><a href="https://github.com/ebishiru"><StyledIcon icon={faGithub}></StyledIcon></a></li>
                <li><a href="https://www.linkedin.com/in/kevin-lo-753606b6/"><StyledIcon icon={faLinkedin}></StyledIcon></a></li>
            </SocialsContainer>
        </HomePageContent>

    )
}

const HomePageContent = styled.div`
    margin: 18vh 0;

    & p {
        text-align: center;
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledImg = styled.img`
    margin: 1rem;
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid var(--color2);
    -webkit-box-shadow:0px 0px 105px 40px rgba(91,192,190,0.49);
    -moz-box-shadow: 0px 0px 105px 40px rgba(91,192,190,0.49);
    box-shadow: 0px 0px 105px 40px rgba(91,192,190,0.49);
`
const SpecialWord = styled.span`
    color: var(--color2);
`

const SocialsContainer = styled.ul`
    margin: 1rem auto;
    padding-left: 15rem;
    list-style-type: none;
    display: flex;
    justify-content: center;

    & li {
        margin: 0 0.5rem;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 2rem;
    color: var(--color2);
    transition: all 0.5s ease-in-out;

    &:hover {
        opacity: 0.5;
    }
`

export default Home
