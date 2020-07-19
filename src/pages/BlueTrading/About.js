import React from 'react';
import './About.scss';

const numbers = [
  { strongText: '+20', bottomText: 'Lorem Ipsum' },
  { strongText: '7', bottomText: 'Lorem Ipsum' },
  { strongText: '2010', bottomText: 'Lorem Ipsum' },
  { strongText: '115', bottomText: 'Lorem Ipsum' },
];

export default function About() {
  return (
    <section className="about container">
      <div className="about__content">
        <h3 className="heading">About Us</h3>
        <p className="normal-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est{' '}
        </p>
      </div>
      <div className="about__numbers">
        {numbers.map(({ strongText, bottomText }, index) => (
          <div key={index}>
            <p>{strongText}</p>
            <p className="normal-text">{bottomText}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
