import styled from "styled-components";

const About = () => {

    return (
        <AboutPage>
            <h2>Credentials</h2>
            <p>Earned my Bachelor's in Building Engineering from Concordia in 2019</p>
            <p>Completed Concordia’s Web Development Bootcamp in 2025</p>
            <h2>Work Experience</h2>
            <Date>Aug 2020 - Apr 2021 & Apr 2024 - Dec 2024</Date>
            <p>Warranty Administrator</p>
            <p>At TransformerTable, I streamlined warranty workflows and resolved a major backlog—boosting my ability to identify issues and improve systems efficiently.</p>
            <Date>Sep 2021 - Mar 2024</Date>
            <p>Assistant Language Teacher</p>
            <p>As an Assistant Language Teacher in Japan, I built strong communication and adaptability skills while creating custom lesson plans and collaborating with diverse teams.</p>
            <Date>Aug 2018 - Apr 2020</Date>
            <p>Quality Assurance Tester</p>
            <p>In QA at Keywords Studios, I developed a sharp eye for detail, writing test cases and ensuring product quality for major clients like Ubisoft and Epic Games.</p>
        </AboutPage>
    )
}

const AboutPage = styled.div`
    margin: 3rem 0;
`

const Date = styled.p`
    color: var(--color2);
`

export default About