import { colors } from 'shared/utils/Styles';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${colors.backgroundDarkest};
  color: ${colors.textMute};
  padding: 3em 6%;
  font-size: 0.85rem;
  font-family: 'AlongSans', sans-serif;
  line-height: 1.7em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledFooterCol = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

interface PropsTitle {
  size?: string;
}

export const StyledFooterTitle = styled.div<PropsTitle>`
  color: ${colors.textLightest};
  font-family: 'AlongSansBold', sans-serif;
  font-size: ${(props) => (props.size ? props.size : '1.25rem')};
  line-height: 1.5em;
`;
