import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    return (
        <>
        <h2>Technologies</h2>
        <IconContainer>
            <li>React</li>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Github</li>
            <li>MongoDB</li>
            <li>Vercel</li>
        </IconContainer>
        <h2>Projects</h2>
        <ProjectContainer>
            <a href="https://github.com/ebishiru/project-js-nyan-cat" target="_blank"><ProjectImg src="/my-portfolio/assets/nyan-cat-picture.jpg" alt='Picture of the game "I CAN HAZ CHEEZBURGER?!??"'/></a>
            <p>"I CAN HAZ CHEEZBURGER" <br/>(Space Invader Clone)</p>
            <p><a href="https://github.com/ebishiru/project-js-nyan-cat">Github</a></p>
        </ProjectContainer>
        <ProjectContainer>
            <a href="https://sylliegirlybeauty.vercel.app/" target="_blank"><ProjectImg src="/my-portfolio/assets/syllie_girly_beauty_picture.jpg" alt="Picture of Syllie Girly Beauty Webpage"/></a>
            <p>"Syllie Girly Beauty" <br/>(MERN Full Stack Solo Webpage Project)</p>
            <p><a href="https://github.com/ebishiru/sylliegirlybeauty" target="_blank">Github</a></p>
            <p><a href="https://sylliegirlybeauty.vercel.app/" target="_blank">Live</a></p>
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
    height: 400px;
    width: auto;
    margin: 1.5rem;
    border: 2px solid var(--color2);
    transition: all 0.5s ease-in-out;
    border-radius: 5px;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

export default Projects