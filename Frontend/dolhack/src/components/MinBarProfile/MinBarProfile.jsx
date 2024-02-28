import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/profile";
import { TbMessages } from "react-icons/tb";
import { MdNotificationsNone, MdNotificationsActive } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BsDoorOpen } from "react-icons/bs";
import { useEffect } from "react";

function MinBarProfile(){
    const navegate = useNavigate();
    const {Logout, countNotificationsData, count} = useProfile();

    useEffect(()=>{
        countNotificationsData();
    },[]);

    return(
      <div className="Settings-Home">
            <ul>
                <samp title="Mensajes" >
                    <TbMessages />
                </samp>
            </ul>
            <ul>
                {
                    count > 0 ?
                    <samp title={"Tienes "+count+" Notificaciones"} onClick={()=> navegate("/notification")} >
                        <MdNotificationsActive />    
                    </samp>
                    :
                    <samp title="No tienes Notificaciones" onClick={()=> navegate("/notification")} >
                        <MdNotificationsNone />    
                    </samp>
                }
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