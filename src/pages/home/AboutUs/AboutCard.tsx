import React from 'react';
import { StyledMainDisc, StyledMainTitle } from '../Main/Styles';

interface Props {
  icon: React.ReactNode;
  title: String;
  disc: string;
}

const AboutCard: React.FC<Props> = (props) => {
  const { icon, title, disc } = props;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2em',
      }}>
      <div style={{ width: '10%' }}>{icon}</div>
      <div
        style={{
          width: '85%',
          display: 'flex',
          flexDirection: 'column',
        }}>
        <StyledMainTitle style={{ fontSize: '1rem' }}>{title}</StyledMainTitle>
        <StyledMainDisc width="100%" size="0.85rem">
          {disc}
        </StyledMainDisc>
      </div>
    </div>
  );
};

export default AboutCard;
