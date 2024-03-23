import React, { useState } from "react";
import "./ContenetUser.css"
import { useHome } from "../../context/home";

function ContenetUser({teacher}) {
    const {selectionUser} = useHome();

    return(
        <div className="ContenetUser-Div" >
            {selectionUser(teacher)}
        </div>
    );
}

export default ContenetUser;