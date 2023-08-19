import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="Navbar">
      <NavLink to="/drink">Cola</NavLink> 
      <NavLink to="/candy">Chocolate</NavLink> 
      <NavLink to="/chips">Chips</NavLink> 
        </nav>
    )
}

export default Navbar;

