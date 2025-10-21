import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;700&display=swap'); /*google font*/

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
  }

  body { /*initialize body*/
    background-color: #FAF3E0;
    font-family: Domine, Arial, Helvetica, sans-serif;
    margin: 0 10%; /*no top/bottom margin but 10% l/r margin of parent*/
    line-height: 1.6;
    display: flex; /*flexbox container - children become flexbox items*/
    flex-direction: column;
    font-weight: 400;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  body h2 {
    font-size: calc(20px + 0.5vw);
  }

  body h3 {
    font-size: calc(10px + 0.5vw);
  }

  body p {
    font-size: calc(10px + 0.5vw);
  }
  
  table {
    border-collapse: collapse; /*combine borders for aesthetic*/
    margin: 15px 0;
    width: 60%;
    text-align: left;
  }

  table th, td {
    border: 2px solid #FF7D00;
    padding: 8px 12px;
  }

  table th {
    background-color: #1A1A1A;
    font-weight: bold;
    color: #FF7D00;
  }
  
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .idxMain { /*main layout for page content, */
    display: flex;
    flex-direction: row; /*side by side items*/
    flex: 1; /*allow items to fill*/
  }
  
  @media screen and (max-width: 1000px) { /*webpage responsiveness for medium < 1000px screens*/
    body {
      margin: 0; /*remove horizontal margins*/
    }
    
    .idxMain {
      flex-direction: column; /*REQUIREMENT: stack nav and main vertically (important for requirements)*/
    }
  }
`;

export default GlobalStyle;
