import { breakpoints, colors } from 'shared/utils/Styles';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 75%;
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: ${colors.backgroundLightest};
  border-radius: 12px;
  padding: 2em 4em;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    margin: 2em 0;
  }
`;

export const StyledShadowCard = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.backgroundLightest};
  border-radius: 12px;
  padding: 3em 2em;
  border-radius: 10px;
  box-shadow: 0px 20px 57px -30px rgba(64, 64, 64, 0.75);
  transition: all 500ms;

  &:hover {
    background: ${colors.textSecondary};
    color: white;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 80%;
    margin: 2em 0;
  }
`;

export default StyledCard;
