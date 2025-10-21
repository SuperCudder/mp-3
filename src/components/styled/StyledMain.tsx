import styled from 'styled-components';

export const MainWrapper = styled.main`
  background-color: #FAF3E0;
  padding: 10px;
  width: 70%;
  flex-grow: 1; /*take up horizontal space in flex cont*/
  display: inline-block;
  vertical-align: top; /*align top of nav*/
  min-height: 400px;

  h1 {
    margin: 5px;
  }

  h2 {
    color: #1A1A1A;
    font-size: calc(15px + 0.5vw); /*responsive*/
    margin-top: 5px;
    margin-bottom: 5px;
  }

  h3 {
    font-size: calc(15px + 0.5vw);
    margin-bottom: 5px;
    margin-top: 5px;
  }

  ul {
    list-style-type: none; /*remove bulletpoints*/
    padding: 0;
    margin: 0;
  }

  p {
    line-height: 1.6;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: calc(14px + 0.2vw);
    color: #1A1A1A;
  }

  @media screen and (max-width: 1000px) {
    width: 100%; /*full width on <1000px*/
    background-color: #FAF3E0;
    padding: 10px;
    order: 2;
    max-width: 100%;

    h1 {
      margin-right: 50px;
    }

    h2 {
      color: #1A1A1A;
      font-size: calc(20px + 0.5vw);
      margin-top: 25px;
      margin-bottom: 15px;
    }
  }
`;
