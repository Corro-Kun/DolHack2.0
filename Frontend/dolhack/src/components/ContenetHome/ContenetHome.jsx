import React, { Suspense } from "react";
import "./ContenetHome.css";
import { useHome } from "../../context/home";

function ContenetHome({children}) {
    const {filterUsers} = useHome();
    return(
        <div className="Contenet-Home" >
            <div className="Search-Home">
                <input type="text" placeholder="Explore" onChange={(e)=>filterUsers(e)} />
            </div>
            <Suspense fallback={<h2>Cargando...</h2>} >
                {children}
            </Suspense>
        </div>
    );
}

export default ContenetHome;
