import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {
  StyledMainSub,
  StyledMainTitle,
  StyledMainTopShadow,
} from '../Main/Styles';
import StyledTestimonials from './Styles';

const slideImages = [
  {
    url: 'https://i.ibb.co/d287R4z/testimonial-1.jpg',
    caption: 'We were proud with Rica.',
  },
  {
    url: 'https://i.ibb.co/VTz0X6r/testimonial-2.jpg',
    caption: 'Rica is the best, they always deliver a quality product on time.',
  },
  {
    url: 'https://i.ibb.co/56mZDY6/testimonial-3.png',
    caption: 'We had a greate time working with rica.',
  },
];

const Testimonials = () => {
  return (
    <StyledMainTopShadow>
      <StyledMainSub>
        <StyledMainTitle
          style={{
            fontSize: '2rem',
            marginBottom: '2em',
          }}>
          Testimonials
        </StyledMainTitle>
      </StyledMainSub>

      <StyledTestimonials className="slide-container">
        <Slide>
          {slideImages.map((slideImage) => (
            <div className="each-slide" key={slideImage.caption}>
              <div
                style={{
                  background: `url(${slideImage.url}) no-repeat center center fixed`,
                  height: '420px',
                }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    color: `rgba(255, 255, 255, 0.5)`,
                    fontSize: '1.5rem',
                    paddingTop: '2em',
                  }}>
                  {slideImage.caption}
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </StyledTestimonials>
    </StyledMainTopShadow>
  );
};

export default Testimonials;
