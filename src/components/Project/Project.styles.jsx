import styled, { css } from "styled-components";

const darkThemeStylesContainer = css`
    color: #e6e6e6;
    box-shadow: none;
    background-color: #2c2f35; 
    &:hover {
        box-shadow: none;;
        transform: rotateZ(-2deg) scale(1);
    }
` 

const darkThemeStylesList = css`
    border: 1px solid #64748b;
    background-color: #2c2f35 ;
    color: #cbd5e1;
    font-weight: 400;
` 
const darkThemeStylesTitle= css`
    color: #e6e6e6;
` 
const darkThemeStylesExternalLink = css`
    a > svg > g > path {
        fill:#e6e6e6!important   
    }
` 

export const ProjectContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    color: #444452;
    text-align: left;
    background-color: #fff;       
    padding: .9rem;
    max-width: 500px;
    border-radius: 0.25rem;
    border: none;
    transition: all 0.3s ease-in-out;
    box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
    gap: 10px;
    &:hover {
        box-shadow: #cbd5e1 1px 3px 2px,#e2e8f0 12px 8px 0px;
        transform: rotateZ(-2deg) scale(1);
    }
    ${({isThemeDark}) => isThemeDark && darkThemeStylesContainer} 
`

export const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ProjectInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ExternalLinks = styled.p`
    display: flex;
    align-items: center;
    margin: 0;
    a {
        margin-right: .8rem;
        text-decoration: none;
    }
    
    a svg {
        transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        cursor: pointer;
        
    }
    a svg:hover {
        opacity: .7;
    }
    ${({isThemeDark}) => isThemeDark && darkThemeStylesExternalLink} 
`

export const Title = styled.h3`
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: #0f172a;
    ${({isThemeDark}) => isThemeDark && darkThemeStylesTitle} 
`

export const TechList = styled.ul`
    text-align: left;
    padding-left: 0;
    list-style: none;
    margin-bottom: 0;
    li {
        background: #cbd5e1;
        padding: 0.15rem 0.35rem;
        color: #64748b;
        border-radius: .25rem;
        font-size: 0.75rem;
        letter-spacing: 1px;
        border: none;
        display: inline-block;
        margin-right: 0.4rem;
        margin-bottom: .4rem;

        ${({isThemeDark}) => isThemeDark && darkThemeStylesList} 
    }
`

export const Image = styled.img`
    flex: 0 0 auto;
    max-width: 100%;
    height: 166px;
    border-radius: .25rem;
`

export const Txt = styled.p`
    font-size: .9rem;
    line-height: 1.4rem;
    font-weight: 400;
`
