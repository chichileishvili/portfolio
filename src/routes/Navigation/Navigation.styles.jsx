import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const darkThemeStyles = css`
  color: rgb(229 229 229);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavIconContainer = styled.div`
  cursor: pointer;
  max-width: 100vw;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  margin-left: 4rem;
  margin-top: 5rem;
  margin-right: 4rem;
  ${({ isThemeDark }) => isThemeDark && darkThemeStyles}
`;
export const NavContainer = styled.nav`
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  height: 13rem;
  align-items: center;

  ${({ isThemeDark }) => isThemeDark && darkThemeStyles}
  @media screen and (max-width: 480px) {
    transition: opacity 0.9s ease-in-out, transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    ${({ isThemeDark }) =>
      isThemeDark
        ? "background-color: rgb(36,39,44);"
        : "background-color: white;"}
    z-index: 100;
    width: 100%;
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  svg {
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    &:hover {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;
export const NavLinks = styled.ul`
  display: flex;
  padding-left: 0;
  list-style: none;
  justify-content: space-between;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (max-width: 480px) {
    width: 70%;
    display: flex;
    gap: 4rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const Navlink = styled(Link)`
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 400;
  &.first-link {
    margin-left: 0;
  }
  color: #334155;
  ${({ isThemeDark }) => isThemeDark && darkThemeStyles}
  transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 480px) {
    ${({ isThemeDark }) => isThemeDark && darkThemeStyles}
    margin-left: 0;
    font-size: 1.5rem;
  }
`;
