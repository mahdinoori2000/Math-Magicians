import { NavLink, Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/displayQuote';
import Home from './components/home';
import './components/App.css';

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">Math Magicians</div>
        <ul className="nav-links">
          <li><NavLink to="home">Home</NavLink></li>
          <li><NavLink to="calculator">Calculator</NavLink></li>
          <li>
            <NavLink to="quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
