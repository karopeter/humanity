import React from 'react';
import homeImage from '../../assets/hero.jpg';
import abstract from '../../assets/abstract2.jpg';
import { HeroSection, HeroBackground, Img,  HeroContent, HeroTitle, HeroH1, HeroP, HeroSearch, HeroContainer, Label, Input, HeroBtn } from './HeroElements';

const Hero = () => {
    return (
     <HeroSection id="hero">
       <HeroBackground>
          <Img src={homeImage} alt="" />
       </HeroBackground>
       <HeroContent>
           <HeroTitle>
             <HeroH1>TRAVEL TO EXPOLORE</HeroH1>
             <HeroP>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                 natus, enim ipsam magnam odit deserunt itaque? Minima earum velit 
                 teneture! 
             </HeroP>
           </HeroTitle>
           <HeroSearch>
               <HeroContainer>
                   <Label htmlFor="">Where you want to go</Label>
                   <Input type="text" placeholder="Search your location" />
               </HeroContainer>
               <HeroContainer>
                   <Label htmlFor="">Check-in</Label>
                   <Input type="date" />
               </HeroContainer>
               <HeroContainer>
                   <Label htmlFor="">Check-out</Label>
                   <Input type="date" />
               </HeroContainer>
               <HeroBtn>Explore Now</HeroBtn>
           </HeroSearch>
       </HeroContent>
     </HeroSection>
    );
};

export default Hero;

