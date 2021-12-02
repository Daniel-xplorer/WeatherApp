//codigo reutilizable para la parte de max y min en la card""
import minCardStyles from "../Styles/app/minCard.module.css"

export default function MinCard (props){ //recordar que simpre las funciones jsx deben comenzar con mayuscula, que que son como clases
    return(
    <div className={minCardStyles.MinCard}>
        <div>
            <span >{props.state}</span>
        </div>
        <div >
            <span style={{fontSize: "2rem"}}>{`${Math.floor(props.valuestate)}°`}</span>
        </div>
    </div>
)};
