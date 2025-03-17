import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return (
        <>
        <h2>Languages & Frameworks</h2>
        <IconContainer>
            <li>
                <StyledIcon icon={faHtml5} style={{ color: "#E34F26" }}></StyledIcon>
                <span>Html</span>
            </li>
            <li>
                <StyledIcon icon={faCss3} style={{ color: "#1572B6" }}></StyledIcon>
                <span>Css</span>
            </li>
            <li>
                <StyledIcon icon={faReact} style={{ color: "#61DAFB" }}></StyledIcon>
                <span>React</span>
            </li>
            <li>
                <StyledIcon icon={faNodeJs} style={{ color: "#339933" }}></StyledIcon>
                <span>NodeJS</span>
            </li>
        </IconContainer>
        <h2>Projects</h2>
        <ProjectContainer>
            <a href="https://github.com/ebishiru/project-js-nyan-cat" target="_blank"><ProjectImg src="/assets/nyan-cat-picture.jpg" alt='Picture of the game "I CAN HAZ CHEEZBURGER?!??"'/></a>
            <p>"I CAN HAZ CHEEZBURGER" <br/>(Space Invader Clone)</p>
        </ProjectContainer>
        </>
    )
}

const IconContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    padding: 0 10vw;

    & li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    & span {
        opacity: 0;
        font-size: 1rem;
        transition: all 0.5s ease-in-out;

        @media (min-width: 1024px) {
        font-size: 1.5rem;
    }
    }

    & li:hover span {
        opacity: 1;
    }
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    transition: all 1s ease-in-out;
    
    @media (min-width: 1024px) {
        font-size: 4rem;
    }

    &:hover {
        transform: rotateY(360deg);
    }
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & p {
        text-align: center;
    }
`
const ProjectImg = styled.img`
    width: 200px;
    height: auto;
    margin: 1.5rem;
    border: 2px solid var(--color2);
    transition: all 1s ease-in-out;
    border-radius: 5%;

    &:hover {
        transform: scale(2);
        cursor: pointer;
    }
`

export default Projects