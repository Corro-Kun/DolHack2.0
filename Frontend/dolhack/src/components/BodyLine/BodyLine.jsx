import React from "react";
import "./BodyLine.css";

function BodyLine({children}) {
    return(
        <div className="BodyLine" >
            <div className="Lines-Main-Body" >
                <div className="line-main-body"></div>
                <div className="line-main-body"></div>
                <div className="line-main-body"></div>
            </div>
            {children}
        </div>
    );
}

export default BodyLine;