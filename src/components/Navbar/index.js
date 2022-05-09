import React from 'react';
import logo from '../../assets/vector1.png';
import { Nav, NavBrand, NavContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
    return (
     <Nav>
      <NavBrand>
        <NavContainer>
            <img src={logo} alt="" />
            Travelo
        </NavContainer>
        <MobileIcon>
            <FaBars />
        </MobileIcon>
      </NavBrand>
      <NavMenu>
      <NavItem>
            <NavLinks to="home">Home</NavLinks>
            <NavLinks to="services">Services</NavLinks>
            <NavLinks to="recommend">Places</NavLinks>
            <NavLinks to="testimonials">Testimonials</NavLinks>
        </NavItem>
      </NavMenu>
        <NavBtn>Connect</NavBtn>
     </Nav>
    );
};

export default Navbar;