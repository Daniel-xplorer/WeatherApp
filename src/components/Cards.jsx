import React from 'react';
import { Routes, Route } from 'react-router';

import Card from "./Card";
import stileCardsBar from "../Styles/app/cards.module.css"
//este modulo llevará el los modulos de card con las diferentes ciudades

export default function Cards(props) {
  
  if(props && Object.keys(props).length > 0){
    return (
    <Routes>
      <Route path="/" element={(
    <div className={stileCardsBar.cardsBar}>
      {props.cities.map((ciudad) => <Card
        key = {ciudad.id}
        max = {ciudad.main.temp_max - 273}
        min = {ciudad.main.temp_min - 273}
        name = {ciudad.name}
        img = {ciudad.weather[0].icon}
        id = {ciudad.id}
        deleteCard = {props.deleteCard}//se menciona esta prop con la entrada de la props de el modulo anterior
      />)} 
    </div>)}/>
    </Routes>)
}

};
//para cada ciudad se usa map. y se crea un modulo Card por cada una de las ciudades qeu entran por props
//esos valores estan en data y pasan por App.js