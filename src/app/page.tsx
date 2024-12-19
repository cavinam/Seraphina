import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import React from "react";
import Aboutme from "@/components/aboutme";
import Skills from "@/components/skills";
import Project from "@/components/project";
import Testimony from "@/components/testimony";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Project />
      <Experience />
      <Testimony />
      <Contact />
    </div>
  );
}
