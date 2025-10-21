import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #1A1A1A;
  padding: 20px;
  text-align: left;

  h1 {
    font-size: calc(24px + 1vw);
    margin-bottom: 10px;
    color: #FF7D00;
  }

  p {
    font-size: calc(14px + 0.5vw);
    color: #FF7D00;
  }

  @media screen and (max-width: 750px) { /*header responsiveness for smaller screens < 750px*/
    text-align: center;
  }
`;
