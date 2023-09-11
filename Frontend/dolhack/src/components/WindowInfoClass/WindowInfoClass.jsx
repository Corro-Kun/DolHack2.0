import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./WindowInfoClass.css";
import {ImUndo2} from "react-icons/im";
import { getInfoClass } from "../../api/class";

function Window(){
    const [data, setData] = useState({});
    const {id}  = useParams();
    useEffect(()=>{
        async function Get(){
            const {data} = await getInfoClass({idclase: id});
            setData(data);
        }
        Get();
    },[]);
    return(
        <div className="WindowInfoClass-Render" >
            <div className="WindowInforClass-Div" >
                <div className="WindowInforClass-Bar" >
                    <h2><ImUndo2 /></h2>
                </div>
                <div className="WindowInfoClass-Flex" >
                    <div className="WindowInfoClass-Contenet1" >
                        <div>
                            <h2>{data.titulo}</h2>
                        </div>
                        <div>
                            <p>{data.descripcion}</p>
                        </div>
                        <div>
                            <img src={data.imagen} loading="lazy" />
                        </div>
                        <div>
                            <p>{data.nombrenivel}</p>
                            <p>{data.nombretipo}</p>
                        </div>
                        <div>
                            <p>{data.fecha_inicio}</p>
                            <p>{data.fecha_finalizacion}</p>
                        </div>
                        <div>
                            <button>Inscribirse</button>
                        </div>
                    </div>
                    <div className="WindowInfoClass-Contenet2">
                        <div className="WindowInfoClass-profile" >
                            <div>
                                <img src={data.foto} loading="lazy" />
                            </div>
                            <h2>Nombre</h2>
                            <p>Correo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window