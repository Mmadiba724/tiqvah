import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import Footer from "./components/footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import Gmc from "./components/Gmc.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => (
    <Router basename="/">
        <ScrollToTop />
        <Navbar />
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gmc" element={<Gmc />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
