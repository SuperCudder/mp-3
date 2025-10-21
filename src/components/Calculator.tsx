import React from 'react';
// @ts-ignore
import useCalculator from './useCalculator';
import {
    CalculatorContainer,
    CalculatorWrapper,
    InputSection,
    ButtonSection,
    ResultBox,
    Output
} from './styled/StyledCalculator.js';

/* calculator component */
const Calculator = () => {
    const {
        num1,
        setNum1,
        num2,
        setNum2,
        result,
        error,
        calculate,
        clear
    } = useCalculator();

    return (
        <CalculatorContainer>
            <CalculatorWrapper>
                <InputSection> {/* input fields */}
                    <label htmlFor="num1"></label>
                    <input
                        type="text"
                        id="num1"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        placeholder="First Input"
                    />
                    <label htmlFor="num2"></label>
                    <input
                        type="text"
                        id="num2"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        placeholder="Second Input"
                    />
                </InputSection>
                <ButtonSection>
                    <button onClick={() => calculate('+')}>+</button>
                    <button onClick={() => calculate('-')}>-</button>
                    <button onClick={() => calculate('*')}>*</button>
                    <button onClick={() => calculate('/')}>/</button>
                    <button onClick={() => calculate('**')}>**</button>
                    <button onClick={clear}>Clear</button>
                </ButtonSection>
                <ResultBox>
                    <Output className={/* convert result to num for comparison */ parseFloat(result) < 0 ? 'is-negative' : ''}>
                        {error || result}
                    </Output>
                </ResultBox>
            </CalculatorWrapper>
        </CalculatorContainer>
    );
};

export default Calculator;