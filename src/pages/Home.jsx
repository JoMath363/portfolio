import { Code } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Project from "./Project";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {

  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </main>

      <Footer/>
    </>
  )
}

export default Home
