import './calculator.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [data, setData] = useState({ total: null, next: null, operation: null });
  const handleClick = (buttonName) => {
    const newData = calculate(data, buttonName);
    setData(newData);
  };
  return (
    <section className="calculator-section">
      <h2 className="secondry-header">Let&apos;s do some Math!</h2>
      <div className="calculator">
        <input className="number-input" type="text" value={data.next || data.total || '0'} readOnly />
        <div className="first-row">
          <button type="button" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" onClick={() => handleClick('%')}>%</button>
          <button type="button" onClick={() => handleClick('÷')}>÷</button>
        </div>
        <div className="second-row">
          <button type="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" onClick={() => handleClick('x')}>x</button>
        </div>
        <div className="third-row">
          <button type="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="third-row">
          <button type="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="fifth-row">
          <button type="button" onClick={() => handleClick('0')}>0</button>
          <button type="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </section>
  );
}
