import React,{createContext, useContext, useState, useEffect} from "react";
import {profile, update, YourList} from "../api/auth";
import { MyClasses, EnterClass} from "../api/class";
import {useNavigate} from "react-router-dom";
import { toast } from "sonner";
import { countNotifications } from "../api/home";

export const ProfileContext = createContext();

export function useProfile() {
    return useContext(ProfileContext);
}

export function ProfileProvider({children}) {
    const [DataProfile, setDataProfile] = useState({});
    const [DataUpdate, setDataUpdate] = useState({});
    const [Fotos, setFotos] = useState({});
    const [myClass, setMyClass] = useState([]); 
    const navigate = useNavigate();


    useEffect(() => {
        GetProfile();
        GetYourList();
    },[]);

    async function GetProfile(){
        const {data} = await profile();
        setDataProfile(data);
        setDataUpdate({
            nombre: data.nombre,
            apellido: data.apellido,
            telefono: data.telefono,
            biografia: data.biografia,
        });
        setFotos({
            foto: data.foto,
            banner: data.banner,
        });
        const result = await MyClasses();
        setMyClass(result.data);
    }

    async function Logout(){
        localStorage.removeItem("token");
        navigate("/login");
        toast.success("Sesión cerrada");
    }

    function changeDataUpdate({target:{name, value, files}}){
        if(name === "foto" || name === "banner"){
            const [file] = files;
            setDataUpdate({...DataUpdate, [name]:file});
        }
        else{
            setDataUpdate({...DataUpdate, [name]:value});
        }
    }

    async function handleUpdate(){
        try {
            const {nombre, apellido, telefono, biografia, foto, banner} = DataUpdate;
            const form = new FormData();
            form.append("nombre", nombre);
            form.append("apellido", apellido);
            form.append("telefono", telefono);
            form.append("biografia", biografia);
            form.append("foto", foto);
            form.append("banner", banner);
            const {data} = await update(form);  
            navigate("/home");
        } catch (error) {
            toast.error("Error al actualizar");
        } 
    }

    async function EnterYourClass(id, teacher){
        try {
            const {data} = await EnterClass(id);
            localStorage.setItem("class", data.token);
            if(teacher){
                navigate("/class/teacher/home");
            }else{
                navigate("/class/student/home");
            }
        } catch (error) {
            toast.error("Error al entrar a la clase");
        }
    }

    const [list, setList] = useState([{}]);

    async function GetYourList(){
        const {data} = await YourList();
        setList(data);
    }

    function dataValid(){
        if (DataProfile.apellido === null || DataProfile.apellido === "" || DataProfile.apellido === undefined || DataProfile.telefono === null || DataProfile.telefono === "" || DataProfile.telefono === undefined || DataProfile.biografia === null || DataProfile.biografia === "" || DataProfile.biografia === undefined || DataProfile.foto === null || DataProfile.foto === "" || DataProfile.foto === undefined || DataProfile.banner === null || DataProfile.banner === "" || DataProfile.banner === undefined) {
            toast.error("Completa tu perfil");
            navigate("/update");
        }else{
            navigate("/newclass");
        }
    }

    const [count, setCount] = useState();

    async function countNotificationsData(){
        const {data} = await countNotifications();
        setCount(data);
    }

    return(
        <ProfileContext.Provider value={{DataProfile, Logout, DataUpdate, changeDataUpdate,Fotos, setFotos , handleUpdate, myClass, EnterYourClass, GetYourList, list, dataValid, countNotificationsData, count}} >
            {children}
        </ProfileContext.Provider>
    );
}