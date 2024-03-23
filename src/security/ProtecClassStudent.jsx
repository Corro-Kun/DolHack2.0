import React,{useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { ValueC } from "../api/class";

function ProtectClass(){
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!localStorage.getItem("class")){
            navigate("/home");
        }
        verify()
    }, []);

    async function verify(){
        try {
            const {data} = await ValueC();
            if(data === 1){
                navigate("/class/teacher/home");
            }
        } catch (error) {
            navigate("/home");
        }
    }

    return(
        <Outlet />
    );
}

export default ProtectClass;