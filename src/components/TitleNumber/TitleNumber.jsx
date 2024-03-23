import React from "react";
import "./TitleNumber.css";

function TitleNumber({number, title, description}){
    return(
        <div className="TitleNumber1-Render" >
            <div className="TitleNumer1-Number" >
                <h2>{number}</h2>
            </div>
            <div className="TitleNumber1-Title">
                <h2>{title}</h2>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default TitleNumber