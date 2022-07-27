import React from "react";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const data = {
    topHead: "This Is Me",
    name: "Ashish Prajapati",
    image: "./hero.svg",
  };
  return <HeroSection {...data} />;
};

export default Home;
