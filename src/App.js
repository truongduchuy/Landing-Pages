import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import BlueTradingImg from 'images/blue-trading.jpg';

function App() {
  return (
    <div className="landing-pages">
      {[...Array(4)].map((item, index) => (
        <div className="landing-pages__item" key={index}>
          <div className="landing-pages__item__wrapper">
            <Link to="/bluetrading">
              <img src={BlueTradingImg} alt="blue-trading" />
            </Link>
            <div>Trading XD landing page template</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
