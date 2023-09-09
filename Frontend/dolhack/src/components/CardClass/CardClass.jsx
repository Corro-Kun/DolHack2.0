import React from "react";
import "./CardClass.css";

function CardClass({tipo, nivel, title, description, foto, imagen}){
    return(
        <div className="CardClass-Home-Card" style={{backgroundImage: "url('"+imagen+"')"}}>
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