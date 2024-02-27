import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";
import Footer from "../../components/Footer/Footer.component";
import { ReactComponent as SunIcon } from "../../assets/sunIcon.svg";
import { ReactComponent as MoonIcon } from "../../assets/moonIcon.svg";
import { TfiAlignLeft } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

import {
  Main,
  NavContainer,
  NavLinks,
  Navlink,
  IconContainer,
  NavIconContainer,
} from "./Navigation.styles";
import { SwitchContext } from "../../contexts/switch.context";

const Navigation = () => {
  const { isThemeDark, setIsThemeDark } = useContext(SwitchContext);

  const handleThemeChange = () => {
    setIsThemeDark(!isThemeDark);
  };
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);
  console.log(isNavbarClicked);
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const handleNavbarClick = () => {
    setIsNavbarClicked(!isNavbarClicked);
  };

  useEffect(() => {
    if (isNavbarClicked && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavbarClicked, isMobile]);

  return (
    <Main>
      {isMobile ? (
        <>
          <NavIconContainer isThemeDark={isThemeDark}>
            <TfiAlignLeft size="25px" onClick={handleNavbarClick} />
            <IconContainer role="button" onClick={handleThemeChange}>
              {isThemeDark ? <SunIcon /> : <MoonIcon />}
            </IconContainer>
          </NavIconContainer>
          {isNavbarClicked && (
            <NavContainer isThemeDark={isThemeDark}>
              <NavLinks>
                <TfiClose
                  cursor="pointer"
                  size="30px"
                  onClick={handleNavbarClick}
                />
                <li onClick={handleNavbarClick}>
                  <Navlink
                    className="first-link"
                    isThemeDark={isThemeDark}
                    to="/"
                  >
                    Home
                  </Navlink>
                </li>
                <li onClick={handleNavbarClick}>
                  <Navlink isThemeDark={isThemeDark} to="/projects">
                    Projects
                  </Navlink>
                </li>
                <li onClick={handleNavbarClick}>
                  <Navlink isThemeDark={isThemeDark} to="/about">
                    About
                  </Navlink>
                </li>
                <li onClick={handleNavbarClick}>
                  <Navlink isThemeDark={isThemeDark} to="/tech-skills">
                    Tech Skills
                  </Navlink>
                </li>
              </NavLinks>
            </NavContainer>
          )}
        </>
      ) : (
        <NavContainer>
          <NavLinks>
            <li>
              <Navlink className="first-link" isThemeDark={isThemeDark} to="/">
                Home
              </Navlink>
            </li>
            <li>
              <Navlink isThemeDark={isThemeDark} to="/projects">
                Projects
              </Navlink>
            </li>
            <li>
              <Navlink isThemeDark={isThemeDark} to="/about">
                About
              </Navlink>
            </li>
            <li>
              <Navlink isThemeDark={isThemeDark} to="/tech-skills">
                Tech Skills
              </Navlink>
            </li>
          </NavLinks>
          <IconContainer role="button" onClick={handleThemeChange}>
            {isThemeDark ? <SunIcon /> : <MoonIcon />}{" "}
          </IconContainer>
        </NavContainer>
      )}

      <Outlet />
      <Footer />
    </Main>
  );
};

export default Navigation;
