import { useEffect, useRef, useState } from "react"

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷'
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula (`${firstFormulaPart} ${lastOperation.current} ${number}`)
    } else {
      setFormula(number);
    }
  },[number])

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(subResult.toString());
  },[formula]);

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    setFormula('0');
    lastOperation.current = undefined;
  }

  const toggleSign = () => {
    if (number === '0') return;

    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber(`-${number}`);
  }

  const del = () => {
    let currentSign = '';
    let temporalNumber = number;

    if( number.includes('-') ) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0,-1));
    }

    setNumber('0');

  }

  const setLastNumber = () => {
    calculateResult();

    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber('0');
  }

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  }

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  }

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  }

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  }

  const calculateSubResult = () => {
    const [firstvalue, operator, secondValue] = formula.split(' ');

    const num1 = Number(firstvalue);
    const num2 = Number(secondValue); //NaN

    if (isNaN(num2)) return num1;

    switch (operator) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operation ${operator} not implemented`)
    }
  }

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
    setPrevNumber('0');

  }

  const buildNumber = (numberString: string) => {
    // Check if dot is already in the number
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || numberString.startsWith('-0')) {
      if (numberString === '0' && number === '0') return;

      if (numberString === '.') {
        console.log('. pressed')
        return setNumber(number + numberString);
      }

      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
    };

    setNumber(number + numberString);
  }

  return {
    // Properties
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
    clean,
    toggleSign,
    del,
  
    // Operations
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  }

}