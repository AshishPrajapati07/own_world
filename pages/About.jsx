import React from "react";
import HeroSection from "../Components/HeroSection";

const About = () => {
  const data={
    name : "FullStack Developer",
    image: "./public/fullstack.png"
  }
  return <HeroSection {...data} />;
};

export default About;