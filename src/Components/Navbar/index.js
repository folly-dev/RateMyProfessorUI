import React, {useState} from "react";
import { Nav, NavLogo, NavbarContainer, Profile, Logout,Container, DrawerContainer, InitialContainer, Inital, MobileIcon, NavSearchBar, NavMenu, NavItem, NavLinks } from "./NavbarElement"
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {LogoutUser} from "../../Actions/SignIn"

const Navbar = ({ toggle, props }) => {
    
    const UserAuthentication = useSelector((state) => state.SignIn);
    const [openDrawer, setOpenDrawer] = useState(false);
    const Drawer = () => {
        setOpenDrawer(!openDrawer);
    }
    const auth = JSON.parse(UserAuthentication.user);
    let FirstName;
    let LastName;
    if (UserAuthentication.user) {
         FirstName = auth.fname.charAt(0);
         LastName = auth.lname.charAt(0);
    }
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(LogoutUser());
        window.location.reload();
    }
    const profilePageNavigation = () => {
        props.history.push("/profile");
    }
    return (
        <>
          <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >RmP</NavLogo>
                    <MobileIcon onClick={ toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="Home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about us">About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="professors">Professors</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="RecentReviews">Reviews</NavLinks>
                        </NavItem>
                            {auth ? (<InitialContainer onClick = {Drawer}><Inital>{FirstName}{LastName}</Inital></InitialContainer>) : (
                                <NavItem>
                                    <NavLinks to="account">Account</NavLinks>
                                </NavItem>
                            )}
                        </NavMenu>
                </NavbarContainer>
                
            </Nav>
            {openDrawer &&
                <Container>
                    <DrawerContainer >
                        <Profile onClick = {profilePageNavigation}>Profile</Profile>
                        <Logout onClick = {handleLogout}>Logout</Logout>
                    </DrawerContainer>
                </Container>
                }
        </>
    )
}
export default Navbar;