import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background-color: #0071f2;
  color: rgb(255 255 255);
  padding: 1.4rem 2.4rem;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(76 94 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowsupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8 rem;
  }
`;