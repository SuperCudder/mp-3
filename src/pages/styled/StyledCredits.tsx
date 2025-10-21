import styled from 'styled-components';

export const CreditsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    margin: 0 0 10px 0; /*spacing below image*/
    float: none; /*remove prev float*/
  }

  @media screen and (max-width: 1000px) {
    order: 3; /*stupid fix for stupid problem, saw order in css: https://developer.mozilla.org/en-US/docs/Web/CSS/order*/
  }
`;
