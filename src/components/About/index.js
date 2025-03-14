

const About = ({content}) => {
    const foundPage = content.find((contentPage) => {
        return contentPage.page === "About";
    })
    return (
        <>
            <h2>About Me</h2>
            {
                foundPage.texts.map((text,index) => {
                    return (
                        <p key={index}>{text}</p>
                    )
                })
            }
        </>
    )
}

export default About