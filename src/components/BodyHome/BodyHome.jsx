import React from "react";
import "./BodyHome.css";

function BodyHome({children}) {
    return(
        <div className="BodyHome">
            {children}
        </div>
    );
}

export default BodyHome;