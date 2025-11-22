import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";
import ShowCase from "./components/ShowCase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import HighLights from "./components/HighLights.jsx";
import Footer from "./components/Footer.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <ShowCase />
            <Performance />
            <Features />
            <HighLights />
            <Footer />
        </main>
    );
}

export default App;