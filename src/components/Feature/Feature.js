import React from 'react';
import './Feature.css';

function Feature(props) {
  return (
    <div className="feature">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Feature;
