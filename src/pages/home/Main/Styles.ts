import { breakpoints, colors } from 'shared/utils/Styles';
import styled from 'styled-components';

export const StyledMain = styled.main`
  font-family: 'AlongSans', sans-serif;
  color: ${colors.textLight};
`;

interface Props {
  pd?: string;
}

export const StyledMainSectionWrapper = styled.section<Props>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => (props.pd ? props.pd : '4em')} 6%;
  padding-left: 6%;
  padding-right: 6%;
  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 2em 6%;
  }
`;

export const StyledSubSectionWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledMainSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 6%;
  padding-top: 4em;
`;

export const StyledMainTitle = styled.h1`
  font-family: 'AlongSansBold';
  margin-bottom: 0.5em;
`;

interface PropsDisc {
  width?: string;
  size?: string;
}

export const StyledMainDisc = styled.div<PropsDisc>`
  max-width: ${(props) => (props.width ? props.width : '50%')};
  line-height: 1.45em;
  font-size: ${(props) => (props.size ? props.size : '1rem')};
  @media screen and (max-width: ${breakpoints.mobile}) {
    max-width: ${(props) => (props.width ? props.width : '90%')};
  }
`;

export const StyledMainTopShadow = styled.div`
  box-shadow: -1px -5px 19px -9px rgba(120, 120, 120, 0.75);
`;
