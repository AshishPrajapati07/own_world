import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../src/context";
import { Button } from "../style/Button";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        {/* For Data section */}
        <div className="section-hero-data">
          <p className="hero-top-data">This Is Me</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {name} Prajapati. I'm 21 year old. I'm a web developer. I
            spend my whole day, practically every day, experimenting with HTML,
            CSS, and JavaScript; dabbling with React and Node; and inhaling a
            wide variety of potentially useless information through a few
            hundred RSS feeds. I build websites that delight and inform. I do it
            well.
          </p>
          <Button className="btn hireme-btn">
            <Link to="/contact">Hire Me</Link>
          </Button>
        </div>
        {/* For Image Section */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero-image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-item: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 90%;
  }
`;

export default HeroSection;
