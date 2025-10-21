import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  bottom: 0;
  left: 0;
  background-color: #1A1A1A;
  padding: 10px;
  text-align: center;
  font-size: calc(3px + 0.5vw);
  width: 100%;
  color: #FAF3E0;

  a {
    color: #FAF3E0;
    text-decoration: none;
  }

  @media screen and (max-width: 1000px) {
    order: 3; /*force footer to bottom*/
  }
`;
