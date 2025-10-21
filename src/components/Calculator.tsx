import React from 'react';
import useCalculator from './useCalculator';

const Calculator = () => {
  const { input1, setInput1, input2, setInput2, result, calculate, clear } = useCalculator();

  return (
    <div id="calculator-container">
      <div id="calculator">
        <div id="input-section">
          <input type="text" id="input-1" placeholder="First Input" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <input type="text" id="input-2" placeholder="Second Input" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>

        <div id="button-section">
          <button onClick={() => calculate('+')}>+</button>
          <button onClick={() => calculate('-')}>-</button>
          <button onClick={() => calculate('*')}>*</button>
          <button onClick={() => calculate('/')}>/</button>
          <button onClick={() => calculate('**')}>**</button>
          <button onClick={clear}>Clear</button>
        </div>

        <div id="result-box">
          <h3 id="output" className={result < 0 ? 'is-negative' : ''}>
            {result === '' ? 'Result will appear here' : result}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Calculator;