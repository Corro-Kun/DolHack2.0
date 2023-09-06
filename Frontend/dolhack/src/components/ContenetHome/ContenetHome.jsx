import React, { Suspense } from "react";
import "./ContenetHome.css";

function ContenetHome({children}) {
    return(
        <div className="Contenet-Home" >
            <div className="Search-Home">
                <input type="text" placeholder="Explore" />
            </div>
            <Suspense fallback={<h2>Cargando...</h2>} >
                {children}
            </Suspense>
        </div>
    );
}

export default ContenetHome;