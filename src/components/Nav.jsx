import React from "react"
import SearchBar from "./SearchBar"
import Logo from "../Styles/Images/iconNav.png"
import navBarstyles from "../Styles/app/nav_bar.module.css"

class NavBar extends React.Component{
    render(){
        return <div className={navBarstyles.navBar}>
            <div classname={navBarstyles.iconCount}>
                <img className={navBarstyles.icon} src={Logo} alt="icono de la barra de navegación" />
            </div>
            <h2 className={navBarstyles.title}>Weather AppPlus</h2>
            <SearchBar onSearch={(ciudad) => alert(ciudad)}/>
        </div>
    }
}
export default NavBar