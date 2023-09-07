import React from "react";
import "./CardUser.css"

function CardUser({name, lastna, description, data, img,banner}) {
    return(
        <div className="Card-User-Main" style={{backgroundImage: "url('"+banner+"')"}} >
            <div className="Card-User-Photo" >
                <img src={img} loading="lazy"/>
            </div>
            <div className="Card-User-Info" >
                <h3>{name} {lastna}</h3>
                <p>{description}</p>
                <h4>{data}</h4>
            </div>
        </div>
    );
}

export default CardUser;