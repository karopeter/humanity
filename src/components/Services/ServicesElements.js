import styled from 'styled-components';

export const ServiceSection = styled.section`
   padding: 5rem 0;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 1rem;
`;

export const Service = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   padding: 2rem;
   background-color: aliceblue;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   transition: 0.3s ease-in-out;
   &:hover {
     transform: translateX(0.4rem) translateY(-1rem);
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   }
`;

export const ServiceIcon = styled.div`
    color: #000;
`;

export const Img = styled.img`
   height: 2.4rem;
`;

export const ServiceTitle = styled.div`
   font-size: 1rem;
   font-weight: 400;
   text-transform: uppercase;
`;

export const ServiceSubtitle = styled.div`
   font-size: 1rem;
   font-weight: 300;
`;