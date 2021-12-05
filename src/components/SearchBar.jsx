import React, { useState } from 'react';
import SearchBarStyle from "../Styles/app/searchBar.module.css"

export default function SearchBar(props) {
  const[stateSearch, setSearch] = useState({})




  function ClickChangeState (){
    
    var input = document.getElementById("inputCity")
    setSearch(input.value)
    props.onSearch(input);
  }
  
  
  return <div className={SearchBarStyle.searchBar} style={{display: 'flex', textaling:"center" }}>
    <input id="inputCity" />
    <button onClick={ClickChangeState}>Agregar</button>
  </div>
};