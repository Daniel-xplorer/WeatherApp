import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div className="card">
    <div className="cardHead">
      <button onClick={props.onClose} className="close">x</button>
      <h1 className="cityName">{props.name}</h1>
    </div>
      <h4>min</h4>
      <span> {props.min}</span>
    <div>
    </div>
      <h4>MAX</h4>
      <span> {props.max}</span>
    <div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen del clima"></img>
    </div>
  </div>
};
