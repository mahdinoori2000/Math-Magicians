import './calculator.css';

export default function Calculator() {
  return (
    <div className="container">
      <input className="number-input" type="text" value="0" />
      <div className="first-row">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">/</button>
      </div>
      <div className="second-row">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">X</button>
      </div>
      <div className="third-row">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
      </div>
      <div className="third-row">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
      </div>
      <div className="fifth-row">
        <button type="button">0</button>
        <button type="button">.</button>
        <button type="button">=</button>
      </div>
    </div>
  );
}
