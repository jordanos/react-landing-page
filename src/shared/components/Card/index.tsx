import React from 'react';
import { colors } from 'shared/utils/Styles';
import StyledCard, { StyledShadowCard } from './Styles';

interface Props {
  title: String;
  disc: String;
}

const Card: React.FC<Props> = ({ title, disc }) => {
  return (
    <StyledCard>
      <h4 style={{ marginBottom: '1em', color: colors.textDarkest }}>
        {title}
      </h4>
      <p>{disc}</p>
    </StyledCard>
  );
};

interface PropsShadow {
  icon: React.ReactNode;
  title: String;
  disc: String;
}
export const ShadowCard: React.FC<PropsShadow> = (props) => {
  const { icon, title, disc } = props;
  return (
    <StyledShadowCard>
      <div style={{ marginBottom: '2em', color: colors.textDarkest }}>
        {icon}
      </div>
      <h4
        style={{
          marginBottom: '1em',
          fontSize: '1.5rem',
          fontFamily: "'AlongSansBold', sans-serif",
        }}>
        {title}
      </h4>
      <p
        style={{
          textAlign: 'center',
          fontSize: '1.25rem',
        }}>
        {disc}
      </p>
    </StyledShadowCard>
  );
};

export default Card;
