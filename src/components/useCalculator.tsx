import { useState } from 'react';

/* custom hook for calculator logic */
const useCalculator = () => {
    /* state variables for numbers, result, and error */
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('Result will appear here');
    const [error, setError] = useState('');

    /* function to perform calculations */
    const calculate = (operation: string) => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);

        if (isNaN(number1) || isNaN(number2)) {
            setError('Please enter valid numbers');
            setResult('Result will appear here');
            return;
        }

        setError('');
        let resValue: number | string = 'Result will appear here'; /* init with string */
        let calculatedNumber: number | undefined;

        switch (operation) {
            case '+':
                calculatedNumber = number1 + number2;
                break;
            case '-':
                calculatedNumber = number1 - number2;
                break;
            case '*':
                calculatedNumber = number1 * number2;
                break;
            case '/':
                if (number2 === 0) {
                    setError('Cannot divide by zero');
                    setResult('Result will appear here');
                    return;
                } else {
                    calculatedNumber = number1 / number2;
                }
                break;
            case '**':
                calculatedNumber = Math.pow(number1, number2);
                break;
            default:
                /* if op not recognized keep the default */
                break;
        }

        if (calculatedNumber !== undefined) {
            resValue = String(calculatedNumber);
        }
        setResult(resValue);
    };

    /* function to clear inputs and result */
    const clear = () => {
        setNum1('');
        setNum2('');
        setResult('Result will appear here');
        setError('');
    };

    return { num1, setNum1, num2, setNum2, result, error, calculate, clear };
};

export default useCalculator;