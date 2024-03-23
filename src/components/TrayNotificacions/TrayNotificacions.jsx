import "./TrayNotificacions.css";
import {useNavigate} from "react-router-dom";
import { useHome } from "../../context/home";
import { FaArrowLeft, FaRegTrashCan } from "react-icons/fa6";
import StyleNotification from "../StyleNotification/StyleNotification";
import { useEffect } from "react";

export default function TrayNotificacions() {
    const navigate = useNavigate();
    const {getNotificationsData, notifications, deleteNotificationsData} = useHome();

    useEffect(()=>{
        getNotificationsData();
    },[]);

    return(
        <div className="TrayNotificacions-Render" >
            <div className="TrayNotificacions-Div" >
                <div className="TrayNotificacions-Bar">
                    <h2 title="Volver" onClick={()=> navigate("/home")} ><FaArrowLeft /></h2>
                    <h3>Notificaciones</h3>
                    <h2 title="Limpiar" onClick={()=> deleteNotificationsData()} ><FaRegTrashCan /></h2>
                </div>
                <div className="TrayNotificacions-Tray" >
                    {
                        notifications.map((item)=>(
                            <StyleNotification key={item.idnotificacion} title={item.titulo_notificacion} description={item.texto_notificacion} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}   