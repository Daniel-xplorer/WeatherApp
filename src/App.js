
import React, { useState } from 'react'

import './App.css';
import Cards from './components/Cards.jsx';
import {cities}  from './initial_data.js';
import NavBar from './components/Nav';

function App() {
  const [stateCities, setCities] = useState(cities)
  
  
  const onSearch = (input) => {
    const nameCity = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=9cbfb0a7f2bdee7e1a3fc6daa817cedc`)
    .then(response => response.json())
    .then((ciudad) => {
      for (let i = 0; i < stateCities.length; i++) {
        if(stateCities[i].id === ciudad.id) return alert("la cuidada ingresada ya existe");
      }
      setCities(stateCities.concat(ciudad));
    })
    .catch(error => alert(error))
  }

  const deleteCard = (x) =>{
    console.log(x,stateCities)
    for (let i = 0; i < stateCities.length; i++) {
      if(stateCities[i].id === x) setCities(stateCities.filter(city => city.id != x));
    }
    console.log(stateCities)
  }

  return (
    <div className="App">
      <NavBar onSearch={onSearch}/>
      <div>
        <Cards
          deleteCard={deleteCard}
          cities={stateCities}
        />
      </div>
      <hr />
    </div>
  );
}

export default App;
