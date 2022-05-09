import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  padding: 2.5rem;
  margin-top: 3rem;
  border-radius: 0.5rem;
`;

export const Span = styled.span`
  font-size: 1rem;
`;

export const FooterUl = styled.ul`
   display: flex;
   list-style-type: none;
   gap: 2rem;
`;

export const FooterLinks = styled.li`
   font-size: 1rem;
   text-decoration: none;
   color: #000;
   transition: 0.3s ease-in-out;
   &:hover {
       color: #302ce9;
   }
`;


export const FooterSocial = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 2rem
`;

export const Links = styled.li`
   text-decoration: none;
   transition: 0.3s ease-in-out;
   &:hover {
    color: #302ce9;
   }
`;