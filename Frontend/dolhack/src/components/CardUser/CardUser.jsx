import React from "react";
import "./CardUser.css"

function CardUser() {
    return(
        <div className="Card-User-Main" style={{backgroundImage: "url('https://img.freepik.com/fotos-premium/metaverso-avatar-digital-metaverso-presencia-tecnologia-digital-mundo-cibernetico-realidad-virtual_72482-3626.jpg')"}} >
            <div className="Card-User-Photo" >
                <img src={"https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg"} loading="lazy"/>
            </div>
            <div className="Card-User-Info" >
                <h3>Nombre de usuario</h3>
                <p>Descripcion</p>
                <h4>datos</h4>
            </div>
        </div>
    );
}

export default CardUser;