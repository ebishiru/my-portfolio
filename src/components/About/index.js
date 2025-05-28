import styled from "styled-components";

const About = () => {

    return (
        <AboutPage>
            <h2>Credentials</h2>
            <p>🔹Completed Concordia’s Web Development Bootcamp in 2025</p>
            <p>🔹Earned my Bachelor's in Building Engineering from Concordia in 2019</p>
            <h2>Work Experience</h2>
            <Date>Aug 2020 - Apr 2021 & Apr 2024 - Dec 2024</Date>
            <p>Warranty Specialist | Transformer Table</p>
            <p>🔹Designed and implemented a full warranty claim workflow; trained and supervised 2 assistants.</p>
            <p>🔹Resolved a 2-year backlog of customer cases within 3 months, significantly improving customer satisfaction.</p>
            <p>🔹Achieved the highest number of positive customer reviews during tenure.</p>
            <Date>Sep 2021 - Mar 2024</Date>
            <p>Assistant Language Teacher | Okayama City Board of Education</p>
            <p>🔹Led English classes and created adaptive lesson plans across 4 high schools.</p>
            <p>🔹Delivered 4–5 daily lessons while managing multiple school schedules and academic levels.</p>
            <p>🔹Invited to present at 3 education conferences on student motivation and teaching methodology.</p>
            <Date>Aug 2018 - Apr 2020</Date>
            <p>Quality Assurance Tester | Keywords Studios</p>
            <p>🔹Conducted QA testing on major platforms (mobile, console, PC); created benchmark and bug reports.</p>
            <p>🔹Mentored junior testers, standardized testing protocols using JIRA, and compiled daily status updates.</p>
            <p>🔹Trusted with high-profile clients such as Ubisoft, Square Enix, and Epic Games.</p>
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