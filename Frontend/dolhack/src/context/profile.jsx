import React,{createContext, useContext, useState, useEffect} from "react";
import {profile} from "../api/auth";

export const ProfileContext = createContext();

export function useProfile() {
    return useContext(ProfileContext);
}

export function ProfileProvider({children}) {
    const [DataProfile, setDataProfile] = useState({});

    useEffect(() => {
        GetProfile();
    },[]);

    async function GetProfile(){
        const {data} = await profile();
        setDataProfile(data);
    }

    return(
        <ProfileContext.Provider value={{DataProfile}} >
            {children}
        </ProfileContext.Provider>
    );
}