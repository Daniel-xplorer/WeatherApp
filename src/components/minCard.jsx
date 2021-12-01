//codigo reutilizable para la parte de max y min en la card

export default function MinCard (props){ //recordar que simpre las funciones jsx deben comenzar con mayuscula, que que son como clases
    return(
    <div>
        <h4>{props.state}</h4>
        <span>{props.valuestate}</span>
    </div>
)};
