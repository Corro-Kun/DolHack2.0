import {React, createContext, useContext,  useState} from "react"
import { UpdateClass, getDataClass, deleteClass } from "../api/class";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "sonner";

const ClassTeacherContext = createContext()

export function useClassTeacher(){
    return useContext(ClassTeacherContext)
}

export function ClassTeacherProvider({children}){
    const navigate = useNavigate();
    const [dataClass, setDataClass] = useState({});

    async function getData(){
        const {data} = await getDataClass();
        setDataClass(data);
    }

    async function handleSubmitDataClass(e){
        e.preventDefault();
        const {data} = await UpdateClass(dataClass);
    }

    function changerDataClass({target: {name, value}}){
        if(value === "Programación"){        
            setDataClass({...dataClass, tipo_idtipo: 1});
        }else if(value === "Lenguas"){
            setDataClass({...dataClass, tipo_idtipo: 2});
        }else if(value === "Principiante"){
            setDataClass({...dataClass, nivel_idnivel: 1});
        }else if(value === "Intermedio"){
            setDataClass({...dataClass, nivel_idnivel: 2});
        }else if(value === "Avanzado"){
            setDataClass({...dataClass, nivel_idnivel: 3});
        }else{
            setDataClass({...dataClass, [name]: value});
        }
    }

    async function DeleteClassT(){
        const {data} = await deleteClass();
        toast("Clase eliminada");
        Cookies.remove("class");
        navigate("/home");
    }

    return(
        <ClassTeacherContext.Provider value={{getData, dataClass, changerDataClass, handleSubmitDataClass, DeleteClassT}}>
           {children} 
        </ClassTeacherContext.Provider>
    );
}