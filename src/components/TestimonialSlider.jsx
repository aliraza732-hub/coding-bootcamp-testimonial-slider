import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "../data/data";

// Outer background
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  position: relative;
 

  @media (max-width: 768px) {
  text-align: center;
  flex-direction: column;
  }

  blockquote {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    position: relative;
    background-image: url('/images/pattern-quotes.svg') ;
    background-repeat: no-repeat;
    color:  rgb(32, 32, 70);
   
`;

const ImageWrapper = styled.div`
  flex: 1;
 
  background-image: url("/images/pattern-bg.svg");
 

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  @media (max-width: 768px) {
  max-width: 80%;
   border-radius: 20px;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
   img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 20px;

   }

`;
const Button = styled.div`
width: 20%;
// background: red;
border-radius: 50px;
display:flex;
justify-content: center;
gap: 1rem;
padding: 1rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin-top: 1rem;
`

const TestimonialSlider = () => {
  return (
    <Section>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Wrapper>
              <TextContent>
                <blockquote>“ {item.text} ”</blockquote>
                <h3 className="text-[#202046] sm:inline text-center mr-1 text-[1.1rem] font-bold">{item.name}</h3>
                <p className="text-[#c2c5d2] inline ">{item.title}</p>
              </TextContent>
              <ImageWrapper>
                <img src={item.avatar} alt={item.name} />
                <Button className="buttons">
                  <button className="prev">
                    <img src="/images/icon-prev.svg" alt="Previous" />
                  </button>
                  <button className="next">
                    <img src="/images/icon-next.svg" alt="Next" />
                  </button>
                </Button>
              </ImageWrapper>
            </Wrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </Section>
  );
};

export default TestimonialSlider;
