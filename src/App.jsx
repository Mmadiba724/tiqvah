import React, { useEffect } from "react";
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
import Donations from "./components/Donations.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
    useEffect(() => {
        // Disable browser's automatic scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <Router basename="/">
            <ScrollToTop />
            <Navbar />
            <div className="pt-[64px]">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gmc" element={<Gmc />} />
                    <Route path="/donations" element={<Donations />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
