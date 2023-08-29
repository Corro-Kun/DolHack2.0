import React from "react";
import "./ContenetHome.css";

function ContenetHome({children}) {
    return(
        <div className="Contenet-Home" >
            <div className="Search-Home">
                <input type="text" placeholder="Explore" />
            </div>
            {children}
        </div>
    );
}

export default ContenetHome;