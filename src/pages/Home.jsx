import { Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Project from "./Project";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";

function Home() {
  //#region Redirect to Section
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [targetSection, setTargetSection] = useState(null);

  const redirectTo = {
    hero: () => setTargetSection(heroRef),
    aboutMe: () => setTargetSection(aboutMeRef),
    projects: () => setTargetSection(projectsRef),
    contact: () => setTargetSection(contactRef),
  };

  useEffect(() => {
    window.scrollTo({
      top: targetSection?.current?.offsetTop ?? 0,
      behavior: "smooth",
    });
  }, [targetSection]);
  //#endregion

  return (
    <div className="relative">
      <Header redirectTo={redirectTo}/>

      <main>
        <div ref={heroRef}><Hero/></div>
        <div ref={aboutMeRef}><AboutMe/></div>
        <div ref={projectsRef}><Projects/></div>
        <div ref={contactRef}><Contact/></div>
      </main>

      <Footer/>
    </div>
  )
}

export default Home
