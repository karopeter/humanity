import styled from 'styled-components';
import { Link as Links } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavBrand = styled.div`
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.4rem;
`;

export const NavContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const MobileIcon = styled.div`
   display: none;
`;

export const NavMenu = styled.ul`
   display: flex;
   list-style-type: none;
   gap: 1rem;
`;

export const NavItem = styled.li`
   justify-content: space-between;
`;

export const NavLinks = styled(Links)`
   text-decoration: none;
   color: #0077b6;
   font-size: 1.2rem;
   padding: 1rem;
   transition: 0ms.1s ease-in-out;
   &:hover {
    color: #023e8a;
   }
   &:first-of-type {
      color: #023e8a;
      font-weight: 900;
   }
`;

export const NavBtn = styled.button`
   padding: 0.5rem 1rem;
   cursor: pointer;
   border-radius: 1rem;
   border: none;
   color: #fff;
   background-color: #48cae4;
   text-transform: uppercase;
   font-size: 1.1rem;
   letter-spacing: 0.1rem;
   transition: 0.3s ease-in-out;
   &:hover {
     background-color: #023e8a;
   }
`;