import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Header from './components/Header';
import FadeIn from "react-fade-in";
import { Rain } from "react-rainfall";

export default function App() {
  return (
    <main className="h-screen flex flex-row overflow-hidden text-orange-900 bg-orangeHappy-100">
      <Header/>
      <div className="flex flex-col w-full h-full">
        <Navbar/>
        <FadeIn className="overflow-auto">
          {/* <div className="" style={{
              position: 'absolute',
              height: '1080px',
              width: '100%'
            }}> 
              <Rain dropletColor="rgb(0,0,0)"/>
          </div> */}
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </FadeIn>
      </div>
    </main>
  );
}
