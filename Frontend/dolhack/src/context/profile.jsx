import React,{createContext, useContext, useState, useEffect} from "react";
import {profile} from "../api/auth";
import {useNavigate} from "react-router-dom";
import Cookie from "js-cookie";
import { toast } from "sonner";

export const ProfileContext = createContext();

export function useProfile() {
    return useContext(ProfileContext);
}

export function ProfileProvider({children}) {
    const [DataProfile, setDataProfile] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        GetProfile();
    },[]);

    async function GetProfile(){
        const {data} = await profile();
        setDataProfile(data);
    }

    async function Logout(){
        Cookie.remove("token");
        navigate("/login");
        toast.success("Sesión cerrada");
    }

    return(
        <ProfileContext.Provider value={{DataProfile, Logout}} >
            {children}
        </ProfileContext.Provider>
    );
}