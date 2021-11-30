import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div className="divInputCity">
    <input className="inputCity" type="text" />
    <button onClick={props.onSearch("colombia")}>Agregar</button>
  </div>
};