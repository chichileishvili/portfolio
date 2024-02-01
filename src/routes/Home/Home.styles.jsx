import styled, { css } from "styled-components";

const darkThemeStylesTxt = css`
    color: #e6e6e6;
    font-weight: 300;
    span {
        color: #e6e6e6;
    }
` 
const darkThemeStylesBtn = css`
    background-color: #1e293b;;
    color: rgb(229 229 229);
` 
    

export const HomeContainer = styled.div`
    height: 100vh;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentContainer = styled.div`
    text-align: left;
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media screen and (max-width: 811px) {
        width: 80%;
    }
    @media screen and (max-width: 480px) {
        width: 95%;
    }
    @media screen and (max-width: 800px) {
        padding-inline: 1.2rem;
    }
`

export const Text = styled.h1`
    line-height: 2.4rem;
    color: #0f172a;
    font-weight: 400;
    font-size: 1.5rem;
    max-width: 50rem;
    span {
        color: #0f172a;
        font-weight: 700;
    }
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTxt} 
    @media screen and (max-width: 800px) {
        line-height: 1.7rem;
        max-width: 40rem;
    }
`

export const Button = styled.a`
    display: inline-block;
    background-color:  #334155;
    color: #fff;
    border-radius: .25rem;
    padding: .8rem 2rem;
    text-decoration: none;
    font-size: .8rem;
    font-weight: 700;
    line-height: 1.75;
    max-width: 10rem;
    width: 100%;
    filter: opacity(75%);
    ${({isThemeDark}) => isThemeDark && darkThemeStylesBtn} 
    @media screen and (max-width: 800px) {
        margin-right: 0rem;
    }
`

