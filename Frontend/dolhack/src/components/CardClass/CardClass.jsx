import React from "react";
import "./CardClass.css";
import { useNavigate } from "react-router-dom";

function CardClass({tipo, nivel, title, description, foto, imagen, id}){
    const navigate = useNavigate();
    return(
        <div className="CardClass-Home-Card" style={{backgroundImage: "url('"+imagen+"')"}} onClick={()=> navigate("/infoclass/"+id)} >
                <div className="CardClass-Home-PhotoCard">
                    <img src={foto} />
                </div>
                <div className="CardClass-Home-Info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                <div>
                    <h5>{tipo}</h5>
                    <h5>{nivel}</h5>
                </div>
            </div>
        </div>
    );
}

export default CardClass;