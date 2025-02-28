import React from "react";
import NavBar from "@/components/NavBar";
import HomeComponent from "@/components/HomeComponent";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import WorkingOn from "@/components/WorkingOn";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <main>
        <HomeComponent />
        <AboutMe />
        <WorkingOn />
        <Experience />
        <MySkills />
        <Contact />
      </main>
    </div>
  );
}
