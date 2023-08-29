import React from "react";
import "./TitleButton.css";
import { useNavigate} from "react-router-dom";

function TitleButton({title, descripcion, button, link}){
    const navigate = useNavigate();
    return(
        <div className="TitleButton1" >
            <h1>{title}</h1>
            <p>{descripcion}</p>
            <button onClick={() => navigate(link)} >{button}</button>
        </div>
    );
}

export default TitleButton