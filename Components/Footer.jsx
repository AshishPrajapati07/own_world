import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../style/Button";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready To Get Started?</h3>
              <h3>Talk To Us Today.</h3>
            </div>
            <div>
              <Link to="/">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            {/* first column */}
            <div className="footer-about">
              <h3>Ashish Prajapati</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus doloremque iure repellat.
              </p>
            </div>
            {/* second column */}
            <div className="footer-subscribe">
              <h3>Subscribe To get Important Updates</h3>
              <form action="https://formspree.io/f/xvoyprok" method="POST">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Enter Your Email"
                  required
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
            {/* third Column */}
            <div className="footer-social">
              <h3>Follow Me</h3>
              <div className="footer-social--icons">
                <div>
                  <AiFillFacebook className="icons" />
                </div>
                <div>
                  <AiFillInstagram className="icons" />
                </div>
                <div>
                  <AiFillGithub className="icons" />
                </div>
                <div>
                  <AiFillLinkedin className="icons" />
                </div>
              </div>
            </div>
            {/* fourth column */}
            <div className="footer-contact">
              <h3>Call us</h3>
              <h3>+91 1234567890</h3>
            </div>
          </div>

          {/* bootom section */}
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column">
              <p>
                @{new Date().getFullYear()} Ashish Prajapati. All Rights
                Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
`;
export default Footer;
