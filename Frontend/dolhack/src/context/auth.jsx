import React,{createContext, useContext, useState} from "react";
import {login as postLogin} from "../api/auth";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const Navegate = useNavigate();

    const [UserLogin, setUserLogin] = useState({
        correo: "",
        contraseña: ""
    });

    function changerUserLogin({target:{name,value}}) {
        setUserLogin({...UserLogin,[name]:value});
    }

    async function login(e) {
        e.preventDefault();
        const {data} = await postLogin(UserLogin);
        Navegate("/home");
    }

    return(
        <AuthContext.Provider value={{changerUserLogin, login}} >
            {children}
        </AuthContext.Provider>
    );
}