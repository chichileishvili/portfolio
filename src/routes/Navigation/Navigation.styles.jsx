import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const darkThemeStyles = css`
    color: rgb(229 229 229);   
` 

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const NavContainer = styled.nav`
    max-width: 100vw;
    display: flex;
    justify-content: space-around;
    height: 13rem;
    align-items: center;
`

export const IconContainer = styled.div`
    cursor: pointer;
    svg {
        transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
        &:hover {
            opacity: .7;
        }
    }
    @media screen and (max-width: 480px) {
        justify-content: space-between;
    }
`
export const NavLinks = styled.ul`
    display: flex;
    padding-left: 0;
    list-style: none;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;
    @media screen and (max-width: 480px) {
        width: 70%;
    }
`

export const Navlink = styled(Link)`
    text-decoration: none;
    margin-left: 2rem;
    font-weight: 400;
    &.first-link {
        margin-left: 0;
    }
    color: #334155;;
    ${({isThemeDark}) => isThemeDark && darkThemeStyles} 
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    &:hover {
        opacity: .7;
    }
    @media screen and (max-width: 480px) {
        margin-left: 0;  
    }
`
