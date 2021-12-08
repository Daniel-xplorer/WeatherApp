import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export function Ciudad ({ onCity }){
    let navigate = useNavigate();

    const ciudad = onCity(useParams().id)[0]
    console.log(ciudad)
    if(ciudad === undefined) return (
        <div>
            <h1 style={{fontFamily:"none"}}>La Ciudad Buscada, no existe entre las seleccionadas en la pagina principal</h1>
        </div>
    ) 
    return(
        <div>
        <div>
            <botonBack type="button" onClick={() => navigate("/")}>
                X
            </botonBack>
            <h1>{ciudad.name}</h1>
        </div>
        <div>
            <span>TEMPERATURA MAXIMA:   {ciudad.main.temp_max}</span> <br />
            <span>TEMPERATURA MINIMA:   {ciudad.main.temp_min}</span>
            <hr />
            <span>HUMEDAD:   {ciudad.main.humidity}</span> <br />
            <span>PRESIÓN:   {ciudad.main.pressure}</span><br />
            <span>VISIVILIDAD:   {ciudad.visibility}</span>

            <hr />
            <span>VELOCIDAD DEL VIENTO:   {ciudad.wind.speed}</span><br />
            <span>TEMPERATURA MINIMA:   {ciudad.main.temp_min}</span>
            <hr />
            <span>COORDENADAS:   LATITUD={ciudad.coord.lat} LONGITUD={ciudad.coord.lon}</span>
            <hr />
        </div>
        </div>
    )
}