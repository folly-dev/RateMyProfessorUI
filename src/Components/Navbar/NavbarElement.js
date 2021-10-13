import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom"
import {Link as LinkScroller} from "react-scroll"
export const Nav = styled.nav`
    background: black;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;
    margin-bottom: 0;

    @media screen and (max-width:960px){
        transition: 0ms.8s all ease;
    }
`
export const InitialContainer = styled.div`
    border-radius: 50%;
    min-width: 30px;
    min-height: 30px;
    border: 2px solid whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 30px;

`
export const DrawerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100px;
    background-color: #2b2d36;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

`
export const Logout = styled.div`
    width: 100%;
    height: 50%;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.2s ease-in-out;
    display: flex;
    color: white;
    border: 0;
    &:hover{
        transition: all 0.3s ease-in-out;
        background:  #2a2a30;
    }
    justify-content: center;
`
export const Profile = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.2s ease-in-out;
    color: white;
    border: 0;
    &:hover{
        transition: all 0.4s ease-in-out;
        background:  #2a2a30;
    }
    justify-content: center;
`

export const Container = styled.div`
    margin-top: 80px;
    width: 97%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: right;
    z-index: 100;
    position: fixed;
    padding: 0;
    
`

export const Inital = styled.span`
    font-size:small ;
    font-weight: 800;
    color: lightblue;
`
export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1100px;
`
export const NavLogo = styled(LinkRouter)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none ;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: white;
    }
`
export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;

 @media screen and (max-width:768px){
     display: none;
 }
`
export const NavItem = styled.li`
 height: 80px;
`
export const NavLinks = styled(LinkScroller)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }

`
export const NavSearchBar = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid whitesmoke;
    margin-left: 10px;
    border-radius: 10px;
    padding: 3px;
    position: relative;
`
export const SearchInputBox = styled.input`
    flex-grow: 1;
    font-size: 1rem;
    padding: 0 0.5em;
    border: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    line-height: 20px;
`
export const SearchButton = styled.button`
    font-size: 1.5rem;
    cursor: pointer;
    border: 0;

`