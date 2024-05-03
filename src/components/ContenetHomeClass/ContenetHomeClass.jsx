import React, { Suspense } from "react";
import { useClass } from "../../context/class";

function ContenetHomeClass({children}) {
    const {filterClass} = useClass();
    return(
        <div className="Contenet-Home" >
            <div className="Search-Home">
                <input type="text" placeholder="Explore" onChange={(e)=> filterClass(e)} />
            </div>
            <Suspense fallback={<h2>Cargando...</h2>} >
                {children}
            </Suspense>
        </div>
    );
}

export default ContenetHomeClass;