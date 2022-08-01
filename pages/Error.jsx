import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Button className="btn home-btn">
                  <Link to="/">GO HOME</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
    text-align: center;
  }

  .four_zero_four_bg h3 {
    font-size: 80px;
  }

  .contant_box_404 {
    margin: auto;
    text-align: center;
  }
`;
export default Error;
