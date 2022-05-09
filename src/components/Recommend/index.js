import React, { useState } from 'react';
import Destination1 from '../../assets/Direction1.jpg';
import Destination2 from '../../assets/Direction2.jpg';
import Destination3 from '../../assets/Direction3.jpg';
import Destination4 from '../../assets/Direction4.jpg';
import Destination5 from '../../assets/Direction5.jpg';
import Destination6 from '../../assets/Direction6.jpg';
import info1 from '../../assets/cog.svg';
import info2 from '../../assets/cog.svg';
import info3 from '../../assets/cog.svg';
import { RecommendSection, RecommendTitle, RecommendH2, RecommendPackages, RecommendUl, RecommendLi, Destinations, Destination, Img, DestinationH3, DestinationContent, DestinationInfo, DestinationServices, DestinationImg, DestinationH4, DestinationDistance, Span } from './RecommendElements';

const Recommend = () => {
    const data = [
      {
        image: Destination1,
        title: "Singapore",
        subTitle: "Singapore, officialy the Republic of Singapore, is a",
        cost: "38,800",
        duration: "Approx 2 night trip"
      }, 
      {
        image: Destination2,
        title: "Thailand",
        subTitle: "Thailand is a Southeast Asia country. It's known for",
        cost: "54,200",
        duration: "Approx 2 night trip"
      },
      {
        image: Destination3,
        title: "Paris",
        subTitle: "Paris, France's capital, is a major European city and a",
        cost: "45,500",
        duration: "Approx 2 night trip"
      },
      {
        image: Destination4,
        title: "New Zealand",
        subTitle: "New Zealand is an island country in the",
        cost: "24,100",
        duration: "Approx 1 night trip"
      },
      {
        image: Destination5,
        title: "Bora Bora",
        subTitle: "Bora Bora is a small South Pacific island northwest of",
        cost: "95,400",
        duration: "Approx 2 night 2 day trip"
      },
      {
        image: Destination6,
        title: "London",
        subTitle: "London, the capital of England and the United",
        cost: "38,800",
        duration: "Approx 3 night 2 day trip"
      }
    ];

    const packages = [
        "The Weekend Break",
        "The Package Holiday",
        "The Group Tour",
        "Long Term Slow Travel"
    ];

    const [active, setActive] = useState(1);
    return (
      <RecommendSection id="recommend">
         <RecommendTitle>
             <RecommendH2>Recommend Destinations</RecommendH2>
         </RecommendTitle>
         <RecommendPackages>
             <RecommendUl>
                 {
                  packages.map((pkg,index) => {
                     return (
                       <RecommendLi className={active===index+1 + 1 ? "active" : ""} onClick={()=>setActive(index + 1)}>{pkg}</RecommendLi>
                     )
                  })
                 }
             </RecommendUl>
         </RecommendPackages>
         <Destinations>
             {
              data.map((destination) => {
                 return (
                   <Destination>
                       <Img src={destination.image} alt="Destination Image" />
                       <DestinationH3>{destination.title}</DestinationH3>
                       <DestinationContent>{destination.subTitle}</DestinationContent>
                       <DestinationInfo>
                           <DestinationServices>
                               <DestinationImg src={info1} alt="" />
                               <DestinationImg src={info2} alt="" />
                               <DestinationImg src={info3} alt="" />
                           </DestinationServices>
                           <DestinationH4>{destination.cost}</DestinationH4>
                       </DestinationInfo>
                       <DestinationDistance>
                           <Span>1000 Kms</Span>
                           <Span>{destination.duration}</Span>
                       </DestinationDistance>
                   </Destination>
                 )
              })
             }
         </Destinations>
      </RecommendSection>
    );
};

export default Recommend;