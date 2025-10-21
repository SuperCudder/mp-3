import styled from 'styled-components';

export const CalculatorContainer = styled.div` /* calc layout/style*/
  margin: 0;
  padding: 5px;
  background-color: #FAF3E0;
`;

export const CalculatorWrapper = styled.div` /*REQUIREMENT: js calculator*/
  background-color: #FAF3E0;
  padding: 10px;
  max-width: 400px;
`;

export const InputSection = styled.div` /*calc input boxes*/
  text-align: center;
  margin-bottom: 10px;

  input {
    background-color: #FAF3E0;
    color: #FF7D00;
    width: 48%; /*side by side input*/
    padding: 12px;
    margin: 2% 1%;
    border: 2px solid #1A1A1A;
    font-size: calc(14px + 0.2vw);
  }

  label {
    color: #FF7D00;
  }
`;

export const ButtonSection = styled.div`
  margin-bottom: 20px;
  text-align: center;

  button {
    width: 30%;
    padding: 15px;
    margin: 5px 1.5%;
    background-color: #FF7D00;
    color: #FAF3E0;
    border: none;
    font-size: calc(16px + 0.3vw);
    cursor: pointer; /*webstorm autofill but good for aesthetic, alters mouse pointer to on buttons for responsiveness*/
  }

  button:hover {
    background-color: #1A1A1A;
  }
`;

export const ResultBox = styled.div`
  text-align: center;
  padding: 15px;
  background-color: #FAF3E0;
  border: 2px solid #1A1A1A;
`;

export const Output = styled.p`
  display: inline-block;
  min-width: 200px;
  min-height: 30px;
  color: #1A1A1A;
  font-size: calc(18px + 0.4vw);
  margin: 0;

  &.is-negative {
    color: red;
  }
`;
