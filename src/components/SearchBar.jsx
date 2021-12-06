import React, { useState } from 'react';
import SearchBarStyle from "../Styles/app/searchBar.module.css"

export default function SearchBar(props) {
  const[stateSearch, setSearch] = useState({})




  function ClickChangeState (){
    
    var input = document.getElementById("inputCity")
    setSearch(input.value)
    props.onSearch(input.value);
    console.log(stateSearch)
    input.value="";
  }
  
  
  return <div className={SearchBarStyle.searchBar} >
    <input id="inputCity" className={SearchBarStyle.input} onSubmit={ClickChangeState}/>
    <button onClick={ClickChangeState} className={SearchBarStyle.button}>Agregar</button>
  </div>
};