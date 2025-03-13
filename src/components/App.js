import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects/projects";
import Contact from "./Contact";

const App = () => {
    return (
        <Router>
            <h1>Kevin Lo</h1>
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Technologies" element={<Technologies />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App