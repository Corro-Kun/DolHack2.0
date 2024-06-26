import React,{useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./WindowInfoClass.css";
import {ImUndo2} from "react-icons/im";
import {toast} from "sonner";
import { getInfoClass, getRegisterClass } from "../../api/class";
import {profile} from "../../api/auth";

function Window(){
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [Button, setButton] = useState(true);
    const {id}  = useParams();
    useEffect(()=>{
        async function Get(){
            const {data} = await getInfoClass(id);
            setData(data);
            const b = await profile();
            if(b.data.rol === "estudiante"){
                setButton(false);
            }
        }
        Get();
    },[]);

    async function Register(){
        const {data} = await getRegisterClass(id);
        navigate("/classes");
    }

    return(
        <div className="WindowInfoClass-Render" >
            <div className="WindowInforClass-Div" >
                <div className="WindowInforClass-Bar" >
                    <h2 onClick={()=> navigate("/classes")} ><ImUndo2 /></h2>
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
                        <div style={Button? {display: "none"}: {}} >
                            <button onClick={()=>{
                                toast.promise(Register(),{
                                    loading: "Inscribiéndose",
                                    success: "Inscrito",
                                    error: (err)=> err?.response?.data?.message
                                })
                            }} >Inscribirse</button>
                        </div>
                    </div>
                    <div className="WindowInfoClass-Contenet2">
                        <div className="WindowInfoClass-profile" >
                            <h2>Profesor encargado</h2>
                            <div>
                                <img src={data.foto} loading="lazy" />
                            </div>
                            <h2>{data.nombre} {data.apellido}</h2>
                            <p>{data.correo}</p>
                            <p>{data.telefono}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Window