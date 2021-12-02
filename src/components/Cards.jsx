import React from 'react';
import Card from "./Card";
import stileCardsBar from "../Styles/app/cards.module.css"
//este modulo llevará el los modulos de card con las diferentes ciudades

export default function Cards(props) {
  const ciudades = props.cities;
  return <div className={stileCardsBar.cardsBar}>
    {ciudades.map((ciudad) => <Card
      key = {ciudad.id}
      max = {ciudad.main.temp_max}
      min = {ciudad.main.temp_min}
      name = {ciudad.name}
      img = {ciudad.weather[0].icon}
      onClose = {() => alert(ciudad.name)}
    />)} 
  </div>
};
//para cada ciudad se usa map. y se crea un modulo Card por cada una de las ciudades qeu entran por props
//esos valores estan en data y pasan por App.js