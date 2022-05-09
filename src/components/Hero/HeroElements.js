import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
   margin-top: 2rem;
   width: 100%;
   height: 100%;
`;

export const HeroBackground = styled.div`
  background-size: cover;
`;

export const Img = styled.img`
   width: 100rem;
   height: 50em;
   margin-left: 6rem;
   padding: 5rem 0rem;
   filter: brightness(60%);
`;

export const HeroContent = styled.div`
   height: 100%; 
   width: 100%;
   position: absolute;
   top: 0;
   z-index: 3;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1rem;
`;

export const HeroTitle = styled.div`
   color: #fff;
`;

export const HeroH1 = styled.div`
   font-size: 3rem;
   letter-spacing: 0.2rem;
`;

export const HeroP = styled.div`
   text-align: center;
   padding: 0 30vw;
   margin-top: 0.5rem;
   font-size: 1.2rem;
`;

export const HeroSearch = styled.div`
   display: flex;
   background-color: #ffffffce;
   padding: 0.5rem;
   border-radius: 0.5rem;
`;


export const HeroContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   padding: 0 1.5rem;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  color: #03045e;
`;


export const Input = styled.input`
   background-color: transparent;
   border: none;
   text-align: center;
   color: #000;
   &[type="date"] {
       padding-left: 3rem;
   }
   &::placeholder {
     color: #000;
   }
   &:focus {
     outline: none;
   }
`;

export const HeroBtn = styled.button`
   padding: 1rem;
   cursor: pointer;
   border-radius: 0.3rem;
   border: none;
   color: #fff;
   background-color: #4361ee;
   font-size: 1.1rem;
   text-transform: uppercase;
   transition: 0.3s ease-in-out;
   &:hover {
     background-color: #023e8a;
   }
`;