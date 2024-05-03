import React from "react";
import {useNavigate} from "react-router-dom";
import "./SessionBoxMain.css";

function SessionBoxMain({icon,title,descripcion,button,path}){
  const navigate = useNavigate();
    return(
        <div className="SessionBoxMain">
            <h1>{icon}</h1>
            <h2>{title}</h2>
            <p>{descripcion}</p>
            <button onClick={()=> navigate(path)}>{button}</button>
        </div>
    );
}

export default SessionBoxMain
