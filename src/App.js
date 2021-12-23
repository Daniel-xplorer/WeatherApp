
import React, { useState } from 'react'
import { Route, Routes } from 'react-router';

import './App.css';
import Cards from './components/Cards.jsx';
import {cities}  from './initial_data.js';
import NavBar from './components/Nav';
import { Ciudad } from './components/Ciudad';
import Form from './components/Form_acces'
import { Link } from 'react-router-dom';

import FooterStyle from './Styles/app/footer.module.css'

const api_key = process.env.REACT_APP_API_KEY; //variable de entorno
function App() {
  const [stateCities, setCities] = useState(cities)
  
  
  const onSearch = (input) => {
    const nameCity = input;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${api_key}`)
    .then(response => {
      if(response.status === 404){
        return alert("La ciudad ingresada no existe")
      }else return response.json()
    })
    .then((ciudad) => {
      for (let i = 0; i < stateCities.length; i++) {
        if(stateCities[i].id === ciudad.id) return alert("la cuidada ingresada ya existe");
      }
      //setCities(ciudad.concat(stateCities));  Primera forma en que lo hize utilizando concat
      setCities((oldCities) => {return [ciudad, ...oldCities]});//La mejor forma
      //al setear una funcion podemos hacer una arrow que tenga como parametro el estado actual
    })
    .catch(error => console.log(error))
  }

  const deleteCard = (x) =>{//x es el id de la card donde se ejecutó
    for (let i = 0; i < stateCities.length; i++) {
      if(stateCities[i].id === x) setCities(stateCities.filter(city => city.id !== x));
    }//busca dentro del estado actual hasta encontrar la ciudad 
    //con ese id y con filter devuelve una array con los objetos de id diferentes a  x
  }
  const onCity = (id) =>{
    var actualCity = stateCities.filter(city => id == city.id);
    return actualCity;
  }

  return (
    <div >
    <Routes>
      <Route path="/" element={
        <div className="App">
          <NavBar onSearch={onSearch}/>
          <div>
            <Cards
            deleteCard={deleteCard} //todos los diferentes props se pasan así
            cities={stateCities}/>
          </div>
        </div>}/>
      <Route path={`/ciudad/:id`} element={<Ciudad onCity={onCity}/>}/>
      <Route path="/form_acces" element={<Form/>}/>
    </Routes>
    <footer className={FooterStyle.reg}>
        <Link to="/form_acces">Registrarse</Link>
    </footer>
    </div>
  );
}

export default App;
