import styled from "styled-components";
import { SiMongodb, SiExpress, SiVercel } from 'react-icons/si';
import { FaReact, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <>
        <h2>Technologies</h2>
        <IconContainer>
            <li><StyledFAIcon><a href="https://react.dev/" target="_blank"><FaReact /></a></StyledFAIcon>React</li>
            <li><StyledFAIcon><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><FaJs /></a></StyledFAIcon>Javascript</li>
            <li><StyledFAIcon><a href="https://nodejs.org/en" target="_blank"><FaNodeJs /></a></StyledFAIcon>Node.js</li>
            <li><StyledRIIcon><a href="https://expressjs.com/" target="_blank"><SiExpress /></a></StyledRIIcon>Express.js</li>
            <li><StyledFAIcon><a href="https://github.com/" target="_blank"><FaGithub /></a></StyledFAIcon>Github</li>
            <li><StyledRIIcon><a href="https://www.mongodb.com/" target="_blank"><SiMongodb /></a></StyledRIIcon>MongoDB</li>
            <li><StyledRIIcon><a href="https://vercel.com/" target="_blank"><SiVercel /></a></StyledRIIcon>Vercel</li>
        </IconContainer>
        <h2>Projects</h2>
        <ProjectContainer>
            <a href="https://github.com/ebishiru/project-js-nyan-cat" target="_blank"><ProjectImg src="/my-portfolio/assets/nyan-cat-picture.jpg" alt='Picture of the game "I CAN HAZ CHEEZBURGER?!??"'/></a>
            <p>"I CAN HAZ CHEEZBURGER" <br/>(Space Invader Clone)</p>
            <p><a href="https://github.com/ebishiru/project-js-nyan-cat">Github</a></p>
        </ProjectContainer>
        <ProjectContainer>
            <a href="https://github.com/ebishiru/project-GROUP-e-commerce" target="_blank"><ProjectImg src="/my-portfolio/assets/ecommerce-picture.jpg" alt='Picture of Wear N Tech'/></a>
            <p>"Wear N Tech" <br/>(eCommerce Website)</p>
            <p><a href="https://github.com/ebishiru/project-GROUP-e-commerce">Github</a></p>
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;
    margin: 3rem auto;
    max-width: 800px;

    & li {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--color1);
        padding: 1rem;
        gap: 0.5rem;
        transition: all 2s;
    }

    & li:hover  {
        transform: rotateY(360deg);
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

    @media (max-width: 800px) {
        width: 350px;
        height: auto;
    }

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`

const StyledFAIcon = styled.div`
    font-size: 2rem;
    color: var(--color2);
`;

const StyledRIIcon = styled.div`
    font-size: 2rem;
    color: var(--color2);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default Projects