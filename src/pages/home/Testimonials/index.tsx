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
    url: 'https://static.wixstatic.com/media/72c0b2_9417bad731e543578911f6110f4e9a2d~mv2.jpg/v1/fill/w_924,h_476,al_c,q_90/72c0b2_9417bad731e543578911f6110f4e9a2d~mv2.jpg',
    caption: 'We were proud with Rica.',
  },
  {
    url: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2660/posts/32707/image/fox-tech-colorful-logo-YE29W9Q.jpg',
    caption: 'Rica is the best, they always deliver a quality product on time.',
  },
  {
    url: 'https://media.graphcms.com/en7vBYDQ2Kkuvgkyl04R',
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
