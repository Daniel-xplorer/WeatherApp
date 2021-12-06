import React from 'react';
import MinCard from './MinCard';

import cardStyle from "../Styles/app/card.module.css"
import botonX from "../Styles/app/exit_button.module.css";

//funcion base de la card

export default function Card(props) { //con el export, esportamos de una vez la funcion para ser utilizada por cards
  
  function clickDelete(){
    props.deleteCard(props.id)
  }

  return <div  className={cardStyle.card}>
    <button className={botonX.close} onClick={clickDelete} >x</button>
    <div style={{display: 'block'}}>
      <h2 className={cardStyle.cityName}>{props.name}</h2>
    </div>
    <div className={cardStyle.cardContent}>
    <MinCard state="min" valuestate={props.min}/>
    <MinCard state="MAX" valuestate={props.max}/>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="imagen del clima"></img>
    </div>
  </div>
  
};

//se retorna el modulo que será utilizado en el dom del siguiente modulo
//se usa los madulos necesarios como MinCard, dandoles sus props o argumentos dentro de la etiqueta

