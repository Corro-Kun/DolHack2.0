import React from "react";
import "./ContenetUser.css"

function ContenetUser({children}) {
    return(
        <div className="ContenetUser-Div" >
            {children}
        </div>
    );
}

export default ContenetUser;