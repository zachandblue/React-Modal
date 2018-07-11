import styled from 'styled-components';
import { elevation, transition, colors } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;

  width: 70vw;
  max-width: 590px;
  margin: auto;
  margin-top: 90px;
  color: ${colors.black};
  ${elevation[3]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[5]};
  }
  @media (max-width: 860px) {
    width: 90vw;
    margin-top: 0;
    box-shadow: none;
  }
  @media (max-width: 460px) {
    width: 100vw;
    margin-top: 0;
    box-shadow: none;
  }
`;

export const Thumbnail = styled.div`
  display: inline-block;
  margin: 5px;
`;
