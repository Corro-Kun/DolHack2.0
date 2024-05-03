import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {profile} from "../api/auth";
import {toast} from "sonner";

export default function ProtecAddClass() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function getUser(){
            const {data} = await profile()
            setUser(data);
        }
        getUser();
    },[]);
    
    if(user.apellido === null || user.apellido === undefined || user.apellido === "" || user.telefono === null || user.telefono === undefined || user.telefono === "" ){
        navigate("/update");
    }

    return(
        <Outlet />
    );
}