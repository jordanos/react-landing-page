import { colors } from 'shared/utils/Styles';
import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 0 0;
  font-family: 'AlongSans', sans-serif;
  color: ${colors.textLight};
`;

interface Props {
  pd?: string;
}

export const MainSectionWrapper = styled.section<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => (props.pd ? props.pd : '4em')} 6%;
  padding-left: 6%;
  padding-right: 6%;
`;

export const SubSectionWrapper = styled.div`
  width: 50%;
`;

export const MainSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 6%;
  padding-top: 4em;
`;

export const MainTitle = styled.h1`
  font-family: 'AlongSansBold';
  margin-bottom: 0.5em;
`;

export const MainDisc = styled.div`
  max-width: 50%;
  line-height: 1.45em;
`;
