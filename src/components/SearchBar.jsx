import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  function ononclick (){
    let inputt = document.getElementById("inputCity");
    props.onSearch(inputt.value);
  }
  
  return <div className="divInputCity" style={{display: 'flex', textaling:"center" }}>
    <input id="inputCity" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{maxWidth:"500px"}}/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ononclick}>Agregar</button>
  </div>
};