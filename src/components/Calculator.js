import React, { useState } from 'react';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculation = (op) => {
    const a = Number(input1);
    const b = Number(input2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (op) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        if (b === 0) {
          setResult('Err: div by 0');
          return;
        }
        res = a / b;
        break;
      case '**':
        res = 1;
        for (let i = 0; i < b; i++) {
          res *= a;
        }
        break;
      default:
        setResult('Invalid input');
        return;
    }
    setResult(res);
  };

  const clearCalc = () => {
    setInput1('');
    setInput2('');
    setResult('');
  };

  return (
    <div id="calculator-container">
      <div id="calculator">
        <div id="input-section">
          <input type="text" id="input-1" placeholder="First Input" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <input type="text" id="input-2" placeholder="Second Input" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </div>

        <div id="button-section">
          <button onClick={() => handleCalculation('+')}>+</button>
          <button onClick={() => handleCalculation('-')}>-</button>
          <button onClick={() => handleCalculation('*')}>*</button>
          <button onClick={() => handleCalculation('/')}>/</button>
          <button onClick={() => handleCalculation('**')}>**</button>
          <button onClick={clearCalc}>Clear</button>
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