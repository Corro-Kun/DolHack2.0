import React from "react";
import "./StoreCardClass.css";
import { useClass } from "../../context/class";
import CardClass from "../CardClass/CardClass";

function StoreCardClass(){
    const{classList} = useClass();
    return(
        <div className="StoreCardClass-render" >
            {
                classList.map((clas, index) => {
                    if(index <= 6){
                        return(
                            <CardClass key={clas.idclase}
                            foto={clas.foto} 
                            imagen={clas.imagen} 
                            title={clas.titulo} 
                            description={clas.descripcion} 
                            tipo={clas.nombretipo} 
                            nivel={clas.nombrenivel} 
                            id={clas.idclase} 
                            />
                        )
                    }
                })
            }
        </div>
    );
}

export default StoreCardClass;