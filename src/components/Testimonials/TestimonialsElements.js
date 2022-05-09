import styled from 'styled-components';

export const TestimonialSection = styled.section`
   marg;in: 5rem 0
`;

export const TestimonialTitle = styled.div`
   text-align: center;
   margin-bottom: 2rem;
`;

export const TestimonialH2 = styled.div`
   font-size: 2rem;
   font-weight: bold;
   margin-top: 2rem;
`;

export const TestimonialContainer = styled.div`
   display: flex;
   margin: 0 2rem;
   gap: 2rem;
`;

export const TestimonialWrapper = styled.div`
   background-color: aliceblue;
   padding: 2rem;
   border-radius: 0.5rem;
   box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
   transition: o.3s ease-in-out;
   &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   }
`;

export const TestimonialContent = styled.p`

`;

export const TestimonialDetails = styled.div`

`;

export const TestimonialInfo = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   align-items: center;
   margin-top: 1rem;
`;

export const TestimonialH4 = styled.h4`

`;

export const Img = styled.img`
   height: 3rem;
   border-radius: 3rem;
`;

export const Span = styled.span`
   font-size: 0.9rem;
`;