import styled, { css } from "styled-components";

export const TeckItemSection = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 0.3fr 0.3fr;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSVG = styled.svg`
  width: 100px;
  height: 100px;

  @media (min-width: 601px) {
    width: 200px;
    height: 200px;
  }
`;

export const TeckIteam = styled.div`
  width: 400px;
  height: 400px;
  margin: 50px auto;
  padding-top: 100px;
  background: ${({ isThemeDark }) => (isThemeDark ? "#d1cac9" : "#141414")};
  text-align: center;
  color: #fff;
  font-size: 3em;
  justify-content: center;
  border-radius: 50%;
  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    margin: 50px auto;
    padding-top: 50px;
    background: ${({ isThemeDark }) => (isThemeDark ? "#d1cac9" : "#141414")};
    text-align: center;
    color: #fff;
    font-size: 3em;
    justify-content: center;
    border-radius: 50%;
  }
`;
