import React from 'react';
import StyledButton from './Styles';

interface Props {
  outline?: boolean;
  children: React.ReactChild | React.ReactChild[];
}

const Button: React.FC<Props> = ({ outline, children }) => {
  return <StyledButton outline={outline}>{children}</StyledButton>;
};

Button.defaultProps = {
  outline: false,
};

export default Button;
