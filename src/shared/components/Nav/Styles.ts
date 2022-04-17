import { colors, zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 4em;
  width: 100%;
  background: ${colors.backgroundLightest};
  color: ${colors.textDarkest};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 6%;
  position: fixed;
  top: 0;
  z-index: ${zIndexValues.navHeader};

  box-shadow: 0px 4px 26px -12px rgba(150, 150, 150, 1);
`;

export const StyledNavList = styled.ul`
  & > li {
    margin-right: 2em;
    display: inline;
    font-size: 14px;
    font-family: 'Roboto';
  }
`;

export default StyledNav;
