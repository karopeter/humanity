import styled from 'styled-components';

export const RecommendSection = styled.section`
   padding: 2rem 0;
`;

export const RecommendTitle = styled.div`
   text-align: center;
`;

export const RecommendH2 = styled.div`
   font-size: 1.5rem;
   font-weight: bold;
`;

export const RecommendPackages = styled.div`
   display: flex;
   justify-content: center;
   margin: 2rem 0;
`;

export const RecommendUl = styled.ul`
  display: flex;
  list-style-type: none;
  width: max-content;
`;

export const RecommendLi = styled.li`
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid #000;
  &:active {
      border-bottom: 0.5rem solid #8338ec;
  }
`;

export const Destinations = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 3rem;
   padding: 0 3rem;
`;

export const Destination = styled.div`
   padding: 1rem;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   background-color: #8338ec14;
   border-radius: 1rem;
   transition: 0.3s ease-in-out;
   &:hover {
       transform: translateX(0.4rem) translateY(-1rem);
       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   }
`;

export const Img = styled.img`
  width: 100%;
`

export const DestinationH3 = styled.h3`
   font-size: 1.5rem;
   font-weight: 300;
`;

export const DestinationContent = styled.div`
   font-weight: 300;
`;

export const DestinationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DestinationServices = styled.div`
   display: flex;
   gap: 0.3rem;
`;

export const DestinationImg = styled.img`
    width: 2rem;
    border-radius: 1rem;
    background-color: #4d2ddb84;
    padding: 0.2rem 0.4rem;
`;

export const DestinationH4 = styled.h4`
    font-size: 1.2rem;
`;

export const DestinationDistance = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const Span = styled.div`
   font-size: 1rem;
`;