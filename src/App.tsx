import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import IntroLoader from "./components/IntroLoader";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/sections.css";

export type Suit = "iron" | "captain" | "spider";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [suit, setSuit] = useState<Suit>("iron");

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`app theme-${suit}`}>
      {showIntro && <IntroLoader />}

      <Navbar suit={suit} setSuit={setSuit} />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Research />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}