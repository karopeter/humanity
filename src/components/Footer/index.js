import React from 'react';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FooterContainer, Span, FooterUl, FooterLinks, FooterSocial, Links } from './FooterElements';

const Footer = () => {
    return (
     <FooterContainer>
         <Span>Copyright &copy; 2021 Travelo. All rights reserved</Span>
          <FooterUl>
              <FooterLinks to="/">Home</FooterLinks>
              <FooterLinks to="/">Services</FooterLinks>
              <FooterLinks to="/">Places</FooterLinks>
              <FooterLinks to="/">Testimonials</FooterLinks>
          </FooterUl>
         <FooterSocial>
             <Links><BsFacebook /></Links>
             <Links><BsLinkedin /></Links>
             <Links><AiFillInstagram /></Links>
         </FooterSocial>
     </FooterContainer>
    );
};

export default Footer;