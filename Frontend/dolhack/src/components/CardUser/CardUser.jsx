import React from "react";
import "./CardUser.css"

function CardUser({name, lastna, description, data, img}) {
    return(
        <div className="Card-User-Main" style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/metaverso-avatar-digital-metaverso-presencia-tecnologia-digital-mundo-cibernetico-realidad-virtual_72482-3626.jpg')"}} >
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