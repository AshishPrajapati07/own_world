import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav className="menuIcon">
      <ul className="navbar-list">
        <li>
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/contact">
            Contacts
          </Link>
        </li>
        <li>
          <Link className="navbar-link" to="/services">
            Services
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 3.5rem;

    li {
      list-style: none;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }
`;

export default Navbar;
