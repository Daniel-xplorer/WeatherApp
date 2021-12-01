//codigo reutilizable para la parte de max y min en la card

export default function MinCard (props){ //recordar que simpre las funciones jsx deben comenzar con mayuscula, que que son como clases
    return(
    <div className="minCard">
        <div className="datos">
            <span className="minCardTitle">{props.state}</span>
        </div>
        <div className="datos" >
            <span className="valueT">{`${Math.floor(props.valuestate)}°`}</span>
        </div>
    </div>
)};
