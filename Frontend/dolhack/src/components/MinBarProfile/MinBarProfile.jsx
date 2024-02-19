import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/profile";
import { TbMessages } from "react-icons/tb";
import { MdOutlineEditNotifications } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsDoorOpen } from "react-icons/bs";

function MinBarProfile(){
    const navegate = useNavigate();
    const {Logout} = useProfile();
    return(
      <div className="Settings-Home">
            <ul>
                <samp title="Mensajes" >
                    <TbMessages />
                </samp>
            </ul>
            <ul>
                <samp title="Notificaciones">
                    <MdOutlineEditNotifications />
                </samp>
            </ul>
            <ul>
                <samp title="Configuraciones" onClick={()=> navegate("/update")} >
                    <FiSettings />
                </samp>
            </ul>
            <ul>
                <samp title="Salir" onClick={()=> Logout()} >
                    <BsDoorOpen />
                </samp>
            </ul>
        </div>
    );
}

export default MinBarProfile;