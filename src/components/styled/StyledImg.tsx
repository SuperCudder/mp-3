import styled from 'styled-components';

export const ImgWrapper = styled.img`
  max-width: 100%;
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  &.idxImg { /*specific to homepage img*/
    float: right; /*keep default position right*/
    margin-right: -10px; /*spacing adjust for float*/
    margin-top: -72px;
    margin-left: 10px;
  }
`;
