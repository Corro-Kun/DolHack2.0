import React,{useEffect} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { valid } from "../api/auth";

function ProtectRouter(){
    const navigate = useNavigate();
    useEffect(() => {
        if(!Cookie.get("token")){
            navigate("/login");
        }
        if(getResponse() == "0"){
            navigate("/login");
        }
    }, []);

    async function getResponse(){
        try {
            const {data} = await valid();
            return data.message;
        } catch (error) {
            navigate("/login");
        }
    }

    return (
        <Outlet />
    );
}

export default ProtectRouter;