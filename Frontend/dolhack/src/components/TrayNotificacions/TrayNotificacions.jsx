import "./TrayNotificacions.css";
import {useNavigate} from "react-router-dom";
import { FaArrowLeft, FaRegTrashCan } from "react-icons/fa6";
import StyleNotification from "../StyleNotification/StyleNotification";

export default function TrayNotificacions() {
    const navigate = useNavigate();

    return(
        <div className="TrayNotificacions-Render" >
            <div className="TrayNotificacions-Div" >
                <div className="TrayNotificacions-Bar">
                    <h2 title="Volver" onClick={()=> navigate("/home")} ><FaArrowLeft /></h2>
                    <h3>Notificaciones</h3>
                    <h2 title="Limpiar" ><FaRegTrashCan /></h2>
                </div>
                <div className="TrayNotificacions-Tray" >
                    <StyleNotification />
                </div>
            </div>
        </div>
    );
}   