import React from 'react';
import BlueTrading from './images/BlueTrading.png';
import Meeting from './images/meeting.png';
import './Header.scss';

const navItems = ['About us', 'Features', 'Contact'];

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div>
          <a href="##">
            <img src={BlueTrading} alt="logo" />
          </a>
        </div>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="##">{item}</a>
            </li>
          ))}
        </ul>
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
