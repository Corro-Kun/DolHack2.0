import "./ContenetBestClass.css";
import CardClass from "../CardClass/CardClass";
import CardUser from "../CardUser/CardUser";
import { useHome } from "../../context/home";
import { useEffect } from "react";

function ContenetBestClass({classs}){
    const {MainHomeData, main} = useHome();
    useEffect(()=>{
        MainHomeData();
    },[])
    if(classs){
        return(
            <div className="BestClass-Home-Render">
                {
                    main?.clase?.map((item,index)=>(
                        <CardClass key={index} title={item.titulo} foto={item.foto} description={item.descripcion} id={item.idclase} imagen={item.imagen} nivel={item.nombrenivel} tipo={item.nombretipo} />
                    ))
                }
            </div>
        );       
    }else{
        return(
            <div className="BestClass-Home-Render">
                {
                    main?.profesor?.map((item,index)=>(
                        <CardUser key={index} name={item.nombre} lastna={item.apellido} description={item.biografia} img={item.foto} data={item.rol} banner={item.banner} />
                    ))
                }
            </div>
        );
    }
}

export default ContenetBestClass;