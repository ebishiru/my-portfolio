import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return (
        <>
        <h2>Languages & Frameworks</h2>
        <IconContainer>
            <li><StyledIcon icon={faHtml5} style={{ color: "#E34F26" }}></StyledIcon></li>
            <li><StyledIcon icon={faCss3} style={{ color: "#1572B6" }}></StyledIcon></li>
            <li><StyledIcon icon={faReact} style={{ color: "#61DAFB" }}></StyledIcon></li>
            <li><StyledIcon icon={faNodeJs} style={{ color: "#339933" }}></StyledIcon></li>
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
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 3rem;
    
    &:hover {
        opacity: 0.7;
    }
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ProjectImg = styled.img`
    width: 200px;
    height: auto;
    margin: 1.5rem;
    border: 2px solid var(--color2);
    transition: all 1s ease-in-out;

    &:hover {
        transform: scale(1.3);
        cursor: pointer;
    }
`

export default Projects