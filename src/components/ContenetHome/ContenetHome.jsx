import React, { Suspense } from "react";
import {useMatch} from "react-router-dom";
import "./ContenetHome.css";
import { useHome } from "../../context/home";

function ContenetHome({children}) {
    const {filterUsers} = useHome();
    const match = useMatch('*');
    return(
        <div className="Contenet-Home" >
            <div className="Search-Home">
                <input type="text" placeholder="Buscar..." onChange={(e)=>filterUsers(e, match.pathname)} />
            </div>
            <Suspense fallback={<h2>Cargando...</h2>} >
                {children}
            </Suspense>
        </div>
    );
}

export default ContenetHome;
