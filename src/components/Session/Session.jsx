import React from "react";
import "./Session.css";

function Session({title,children}){
    return(
        <div className="SessionMain" >
            <h2>{title}</h2>
            <div className="SessionMain-home" >
                {children}
            </div>
        </div>
    );
}

export default Session