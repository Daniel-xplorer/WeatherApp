import React from 'react';
import MinCard from './minCard';


export default function Card(props) {
  // acá va tu código
  return <div className="card">
    <div className="cardHead">
      <button onClick={props.onClose} className="close">x</button>
      <h1 className="cityName">{props.name}</h1>
    <MinCard state="min" valuestate={props.min}/>
    <MinCard state="MAX" valuestate={props.max}/>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen del clima"></img>
    </div>
  </div>
};

