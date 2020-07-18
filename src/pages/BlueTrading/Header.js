import React, { useState } from 'react';
import BlueTrading from './images/BlueTrading.png';
import Meeting from './images/meeting.png';
import './Header.scss';

const navItems = ['About us', 'Features', 'Contact'];

export default function Header() {
  const [toggledMenu, settoggledMenu] = useState(false);
  return (
    <header className="header">
      <nav className="header__nav">
        <div>
          <a href="##">BlueTrading</a>
        </div>
        <ul className={toggledMenu ? 'toggled' : ''}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="##">{item}</a>
            </li>
          ))}
        </ul>
        <div
          className={`header__burger ${toggledMenu ? 'toggled' : null}`}
          onClick={() => settoggledMenu(!toggledMenu)}
        >
          <div />
          <div />
          <div />
        </div>
      </nav>
      <div className="header__content">
        <div>
          <h1>Invest in the Future of</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur <br />
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat,
          </p>
        </div>
        <div>
          <img src={Meeting} alt="" />
        </div>
      </div>
    </header>
  );
}
