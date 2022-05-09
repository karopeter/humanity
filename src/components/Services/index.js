import React from 'react';
import service1 from '../../assets/cog.svg';
import service2 from '../../assets/cogs.svg';
import service3 from '../../assets/android.svg';
import service4 from '../../assets/joomla.svg';
import { ServiceSection, Service, ServiceIcon, Img, ServiceTitle, ServiceSubtitle } from './ServicesElements';


const Services = () => {
    const data = [
       {
        icon: service1,
        title: "Get Best Prices",
        subTitle: "Pay through our application and save thousands and get amazing rewards."
       },
       {
        icon: service2,
        title: "Covide Safe",
        subTitle: "We have all the curated hotels that have all the precaution for a covid safe enviroment"
       },
       {
        icon: service3,
        title: "Flexible Payment",
        subTitle: "Enjoy the flexible payment through our app and get rewards on every payment."
       },
       {
        icon: service4,
        title: "Find The Best Near You",
        subTitle: "Find the best hotels and places to visit near you in a single click."
       }
    ]
    return (
     <ServiceSection id="services">
         {
          data.map((service) => {
             return (
              <Service>
                 <ServiceIcon>
                    <Img src={service.icon} alt="" />
                 </ServiceIcon>
                 <ServiceTitle>{service.title}</ServiceTitle>
                 <ServiceSubtitle>{service.subTitle}</ServiceSubtitle>
              </Service>
             );
          })
         }
     </ServiceSection>
    );
};

export default Services;