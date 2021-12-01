import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  function ononclick (){
    let inputt = document.getElementById("inputCity");
    props.onSearch(inputt.value);
  }
  
  return <div className="divInputCity">
    <input id="inputCity" type="text" />
    <button type="button" onClick={ononclick}>Agregar</button>
  </div>
};