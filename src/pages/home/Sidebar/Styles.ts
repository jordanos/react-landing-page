import { breakpoints, colors, zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  active: boolean;
}

const StyledModal = styled.div<Props>`
  width: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(4, 18, 88, 0.4);
  opacity: 0;

  ${(props) =>
    props.active && `width: 100%; opacity: 1; z-index: ${zIndexValues.modal};`}

  @media screen and (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const StyledSidebar = styled.aside<Props>`
  width: 0;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(4, 18, 88, 0.9);
  opacity: 0;
  display: flex;
  flex-direction: column;
  padding: 4em 1em;
  transition: all 300ms;
  color: ${colors.textLightest};

  ${(props) =>
    props.active &&
    `width: 200px; opacity: 1; z-index: ${zIndexValues.modal + 1};`}

  & > * {
    margin-bottom: 1em;
  }

  @media screen and (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;
export default StyledModal;
