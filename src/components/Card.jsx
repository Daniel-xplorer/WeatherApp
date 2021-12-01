import React from 'react';
import MinCard from './minCard';

//funcion base de la card

export default function Card(props) { //con el export, esportamos de una vez la funcion para ser utilizada por cards
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

//se retorna el modulo que será utilizado en el dom del siguiente modulo
//se usa los madulos necesarios como MinCard, dandoles sus props o argumentos dentro de la etiqueta

