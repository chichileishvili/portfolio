import styled, { css } from "styled-components";

const darkThemeStyles = css`
    color: #e6e6e6;
    font-weight: 300;
` 

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 19rem);
`

export const AboutTextContainer = styled.div`
    text-align: left;
    width: 60%;
    height: 50%;
    @media screen and (max-width: 811px) {
        width: 80%;
    }
    @media screen and (max-width: 480px) {
        width: 95%;
    }
`

export const AboutText = styled.h1`
    line-height: 2.5rem;
    color: #0f172a;    
    font-weight: 400;
    font-size: 1.5rem;
    max-width: 50rem;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem;
        max-width: 50rem;
    }

`