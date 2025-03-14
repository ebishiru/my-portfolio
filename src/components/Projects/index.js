import styled from "styled-components";
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <>
        <h2>Languages and Frameworks I'm familiar with:</h2>
        <ul></ul>
        <h2>Projects I've worked on:</h2>
        <ProjectContainer>
            <a href="https://github.com/ebishiru/project-js-nyan-cat" target="_blank"><ProjectImg src="/assets/nyan-cat-picture.jpg" alt='Picture of the game "I CAN HAZ CHEEZBURGER?!??"'/></a>
            <p>"I CAN HAZ CHEEZBURGER" Game (Space Invader Clone)</p>
        </ProjectContainer>
        </>
    )
}

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
    border: 1px solid red;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: scale(1.3);
        cursor: pointer;
    }
`

export default Projects