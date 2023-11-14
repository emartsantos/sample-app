import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    height: 8em;
    /* margin-top: -8em; */
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    width:100%;

    @media screen and (max-width: 900px) {
        transition: '0.8s' all ease;
    }
`
export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 8em;
    z-index: 1;
    width: 100%;
    padding: 0 2.4em;
    max-width: 110em;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 2.4em;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 100%);
        font-size: 2.5rem;
        cursor: pointer;
        color: #fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -2.2em;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItems = styled.li`
    height: 8em;
    display: flex;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        border-bottom: 3px solid #01bf71;
    }
`
