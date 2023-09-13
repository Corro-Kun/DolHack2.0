import React,{useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { ValueC } from "../api/class";

function ProtectRouter(){
    const navigate = useNavigate();
    useEffect(() => {
        if(!Cookie.get("class")){
            navigate("/home");
        }
        verify()
    }, []);

    async function verify(){
        try {
            const {data} = await ValueC();
            if(data === 2){
                navigate("/class/student/home");
            }
        } catch (error) {
            navigate("/home");
        }
   }

    return (
        <Outlet />
    );
}

export default ProtectRouter;