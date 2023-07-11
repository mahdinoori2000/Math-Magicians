import './calculator.css';

export default function App() {
  return (
    <div className="container">
      <input className="number-input" type="text" />
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
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
      </div>
      <div className="fifth-row">
        <button type="button">0</button>
        <button type="button">.</button>
        <button type="button">=</button>
      </div>
    </div>
  );
}
