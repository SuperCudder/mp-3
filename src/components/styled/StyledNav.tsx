import styled from 'styled-components';

export const NavWrapper = styled.nav`
  background-color: #FF7D00;
  width: 10%; /*sleak, narrower look*/
  text-align: center;
  max-width: 30%; /*REQUIREMENT: max width cannot pass 30% parent*/
  flex-shrink: 0; /*keep from shrinking in tight space*/

  ul {
    display: flex;
    flex-direction: column; /*vert nav when window > 750px*/
    list-style: none; /*remove bullets*/
    margin: 0;
    padding: 0;
  }

  li {
    border-bottom: 3px solid #1A1A1A;
    width: 100%;
    border-left: 2px solid #1A1A1A;
    border-right: 2px solid #1A1A1A;
  }

  a { /*nav links*/
    text-decoration: none; /*removes underline*/
    font-family: Domine, Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: #FAF3E0;
  }

  a:hover {
    color: #FF7D00;
  }

  li:hover {
    background-color: #1A1A1A;
  }

  @media screen and (max-width: 1000px) {
    width: 100%; /*new width for horizontal mode*/
    max-width: 100%;
    order: 0; /*keep nav under header but above everything else while horizontal*/

    ul { /*horizontal nav on smaller screen*/
      flex-direction: row;
      flex-wrap: wrap;
    }

    li {
      margin: 0;
      width: auto;
      flex: 1;
      background-color: #FF7D00;
      border-left: 2px solid #1A1A1A;
      border-right: 2px solid #1A1A1A;
      border-top: 2px solid #1A1A1A;
    }

    li:hover {
      background-color: #1A1A1A;
    }

    li:last-child {
      border-right: 3px solid #1A1A1A;
    }

    a {
      text-align: center;
      padding: 10px 5px;
      font-size: calc(10px + 0.3vw);
    }
  }
`;
