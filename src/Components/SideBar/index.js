import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarMenu, SidebarWrapper, SidebarLink } from './SidebarElement'

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Home
                        </SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>
                        About Us
                        </SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>
                        Professors
                        </SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>
                        RecentReviews
                        </SidebarLink>
                        <SidebarLink to="about" onClick={toggle}>
                        Account
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

