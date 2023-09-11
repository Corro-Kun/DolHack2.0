import React,{createContext, useContext, useState, useEffect} from "react";
import { postClass, getClass , getInfoClass} from "../api/class";
import { useNavigate } from "react-router-dom";
import {toast} from "sonner";

const ClassContext = createContext();

export function useClass(){
    return useContext(ClassContext);
}

export function ClassProvider({children}){
    const navigate = useNavigate();

    const [classData, setClassData] = useState({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        type: "",
        level: "",
        file: null
    });

    const [classList, setClassList] = useState([]);

    useEffect(()=>{
        getListClass();
    },[]);

    async function getListClass(){
        const {data} = await getClass();
        setClassList(data);
        console.log(data);
    }

    function changerClassData({target: {name, value, files}}){
        if(name === "file"){
            setClassData({
                ...classData,
                [name]: files[0],
            });
        }else{
            setClassData({
                ...classData,
                [name]: value,
            });
        }
    }

    async function handleClassData(e){
        e.preventDefault();
        async function complet(){
            const {title, description, start_date, end_date, type, level, file} = classData;
            let tipo = null;
            let nivel = null;

            if(type === "Programación"){
                tipo = "1";
            }else{
                tipo = "2";
            }

            if(level === "Principiante"){
                nivel = "1";
            }else if(level === "Intermedio"){
                nivel = "2";
            }else{
                nivel = "3";
            }            

            const form = new FormData();

            form.append("titulo", title);
            form.append("descripcion", description);
            form.append("fecha_inicio", start_date);
            form.append("fecha_finalizacion", end_date);
            form.append("tipo", tipo);
            form.append("nivel", nivel);
            form.append("file", file);

            const {data} = await postClass(form);

            navigate("/home");
        }
        toast.promise(complet(),{
            loading: "Creando clase...",
            success: "Clase creada con exito",
            error: "Error al crear clase"
        });
    }

    return(
        <ClassContext.Provider value={{classData, changerClassData, handleClassData, classList}}>
            {children}
        </ClassContext.Provider>
    );
}