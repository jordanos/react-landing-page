import React from 'react';
import SendMessage from 'shared/components/Form/SendMeesage';
import {
  StyledMainSectionWrapper,
  StyledMainSub,
  StyledMainTitle,
  StyledSubSectionWrapper,
} from '../Main/Styles';

const ContactUS = () => {
  return (
    <>
      <StyledMainSub>
        <StyledMainTitle
          style={{
            fontSize: '2.5rem',
          }}>
          Contact US
        </StyledMainTitle>
      </StyledMainSub>
      <StyledMainSectionWrapper>
        <StyledSubSectionWrapper>
          <div
            className="mapouter"
            style={{
              position: 'relative',
              textAlign: 'right',
              height: '420px',
              width: '100%',
            }}>
            <div
              className="gmap_canvas"
              style={{
                overflow: 'hidden',
                background: 'none!important',
                height: '420px',
                width: '100%',
              }}>
              <iframe
                title="map"
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=rica%20technologies&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
              />

              <br />
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
          </div>
        </StyledSubSectionWrapper>
        <StyledSubSectionWrapper>
          <SendMessage />
        </StyledSubSectionWrapper>
      </StyledMainSectionWrapper>
    </>
  );
};

export default ContactUS;
