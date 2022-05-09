import React from 'react';
import avatar from '../../assets/bank8.png';
import { TestimonialSection, TestimonialTitle, TestimonialH2, TestimonialContainer, TestimonialWrapper, TestimonialContent, TestimonialInfo, Img, TestimonialDetails, TestimonialH4, Span } from './TestimonialsElements';

const TestimonialPage = () => {
    return (
      <TestimonialSection>
        <TestimonialTitle>
            <TestimonialH2>Happy Customers</TestimonialH2>
        </TestimonialTitle>
        <TestimonialContainer>
            <TestimonialWrapper>
              <TestimonialContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                  asperiores eaque.
              </TestimonialContent>
              <TestimonialInfo>
                  <Img src={avatar} alt="" />
                  <TestimonialDetails>
                     <TestimonialH4>Kishan Sheth</TestimonialH4>
                     <Span>CEO - Shashaan Web Solutions</Span>
                  </TestimonialDetails>
              </TestimonialInfo>
            </TestimonialWrapper>
            <TestimonialWrapper>
              <TestimonialContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                  asperiores eaque.
              </TestimonialContent>
              <TestimonialInfo>
                  <Img src={avatar} alt="" />
                  <TestimonialDetails>
                     <TestimonialH4>Kishan Sheth</TestimonialH4>
                     <Span>CEO - Shashaan Web Solutions</Span>
                  </TestimonialDetails>
              </TestimonialInfo>
            </TestimonialWrapper>
            <TestimonialWrapper>
              <TestimonialContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                  asperiores eaque.
              </TestimonialContent>
              <TestimonialInfo>
                  <Img src={avatar} alt="" />
                  <TestimonialDetails>
                     <TestimonialH4>Kishan Sheth</TestimonialH4>
                     <Span>CEO - Shashaan Web Solutions</Span>
                  </TestimonialDetails>
              </TestimonialInfo>
            </TestimonialWrapper>
        </TestimonialContainer>
      </TestimonialSection>
    );
};

export default TestimonialPage;