import React from 'react';
import Lamp from './images/lamp.png';
import Evolution from './images/evolution.png';
import Currency from './images/currency.png';
import './Features.scss';

const features = [
  {
    imageSrc: Lamp,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ',
  },
  {
    imageSrc: Evolution,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ',
  },
  {
    imageSrc: Currency,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor ',
  },
];
export default function Features() {
  return (
    <section className="features container">
      <div className="features__heading">
        <h3 className="heading">Features</h3>
      </div>
      <div className="features__content">
        {features.map(({ imageSrc, text }, index) => (
          <div className="item" key={index}>
            <div className="item__image">
              <img src={imageSrc} alt="feature" />
            </div>
            <p className="normal-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
