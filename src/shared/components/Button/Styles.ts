import { mixin } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  outline?: boolean;
  bg?: string;
  color?: string;
}

const StyledButton = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.color ? props.color : 'white')};
  border-radius: 50px;
  padding: 0.5em 2em;
  ${mixin.clickable};

  ${(props) =>
    props.outline
      ? `
border: 2px solid ${props.bg ? props.bg : 'black'};
`
      : `
background: ${props.bg ? props.bg : 'black'};
`};
`;

export default StyledButton;
