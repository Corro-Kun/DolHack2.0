import React from "react";
import "./SessionBoxMain.css";

function SessionBoxMain({icon,title,descripcion,button}){
    return(
        <div className="SessionBoxMain">
            <h1>{icon}</h1>
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <button>{button}</button>
        </div>
    );
}

export default SessionBoxMain