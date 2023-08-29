import React from "react";
import "./BarMain.css";
import { Link, useNavigate } from "react-router-dom";

function BarMain(){
    const navigate = useNavigate();
    return(
        <header className="HeaderMain" >
            <div>
                <h2 onClick={() => navigate("/")} >DolHack</h2>
            </div>
            <nav>
                <ul><Link to="/" >Inicio</Link></ul>
                <ul><Link to="/information" >Información</Link></ul>
                <ul><Link to="/services" >Servicios</Link></ul>
            </nav>
            <div>
                <button onClick={() => navigate("/login")} >Sign Up</button>
            </div>
        </header>
    );
}

export default BarMain