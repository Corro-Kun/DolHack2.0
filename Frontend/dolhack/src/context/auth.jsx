import React,{createContext, useContext, useState} from "react";
import {login as postLogin, register as postRegister, complet as postComplet} from "../api/auth";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";

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

    const [UserRegister, setUserRegister] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        rol: 0
    });

    const [UserComplet, setUserComplet] = useState({});

    function changerUserLogin({target:{name,value}}) {
        setUserLogin({...UserLogin,[name]:value});
    }

    async function login(e) {
        e.preventDefault();
        const {data} = await postLogin(UserLogin);
        Navegate("/home");
    }

    function changerUserRegister({target:{name,value}}) {
        setUserRegister({...UserRegister,[name]:value});
    }

    async function register(e) {
        e.preventDefault();
        if(UserRegister.contraseña.length < 8){
            throw new Error("La contraseña debe tener al menos 8 caracteres");
        }
        else{
            const {data} = await postRegister(UserRegister);
            Navegate("/register");
        }
    }    

    function changerComplet({target:{name,value, files}}){
        if(name === "image"){
            const [file] = files;
            setUserComplet({...UserComplet, [name]:file}); 
        }
        else{
            setUserComplet({...UserComplet, [name]:value});
        }
    }

    async function complet(){
        const {biografia, image} = UserComplet;
        const form = new FormData();
        form.append("biografia", biografia);
        form.append("file", image);

        const {data} = await postComplet(form);
        Navegate("/home");
    }

    return(
        <AuthContext.Provider value={{changerUserLogin, login, changerUserRegister, register, changerComplet, complet}} >
            {children}
        </AuthContext.Provider>
    );
}