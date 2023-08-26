import React from "react";
import "./Body.css";

function Body({children}){
    return(
        <div className="Body">
            {children}
        </div>
    );
}

export default Body