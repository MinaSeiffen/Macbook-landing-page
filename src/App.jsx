import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger, SplitText} from "gsap/all";
import ShowCase from "./components/ShowCase.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <ShowCase />
        </main>
    );
}

export default App;