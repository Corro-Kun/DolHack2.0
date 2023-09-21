import {React, createContext, useContext,  useState} from "react"
import { UpdateClass, getDataClass, deleteClass, ListStudent, Postpublic, getPost, getQualification } from "../api/class";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { downloadExcen} from "../lib/downloadExcen";

const ClassTeacherContext = createContext()

export function useClassTeacher(){
    return useContext(ClassTeacherContext)
}

export function ClassTeacherProvider({children}){
    const navigate = useNavigate();
    const [dataClass, setDataClass] = useState({});
    const [PostS, setPostS] = useState({});
    const [list, setList] = useState([]);
    const [post, setPost] = useState([]);

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

    async function ListS(){
        const {data} = await ListStudent();
        setList(data);
    }

    function downloadList(){
        downloadExcen(list, "Lista de estudiantes");
        toast.success("Lista de estudiantes descargada");
    }

    function changerPost({target: {name, value, files}}){
        if(name === "file"){
            const [file] = files;
            setPostS({...PostS, [name]:file});
        }
        else{
            setPostS({...PostS, [name]:value});
        }
    }

    async function HandlePost(){
        const {file, post} = PostS;
        const form = new FormData();
        form.append("file", file);
        form.append("post", post);
        const {data} = await Postpublic(form);
        await consultPost();
    }

    async function consultPost(){
        const {data} = await getPost();
        setPost(data);
    }

    const [Listqualification, setListqualification] = useState([]);

    async function ListQualification(){
        const {data} = await getQualification();
        setListqualification(data);
    }

    function FilterStudent({target: {value}}){
        if(value === ""){
            ListS();
        }else{
            const filter = list.filter((l)=> l.nombre.toLowerCase().includes(value.toLowerCase()) || l.apellido.toLowerCase().includes(value.toLowerCase()));
            setList(filter);
        }
    }

    function downloadQualification(){
        downloadExcen(Listqualification, "Calificación de estudiantes");
        toast.success("Lista de estudiantes descargada");
    }


    return(
        <ClassTeacherContext.Provider value={{getData, dataClass, changerDataClass, handleSubmitDataClass, DeleteClassT, ListS, list, downloadList, changerPost, HandlePost, consultPost, post, ListQualification, Listqualification, FilterStudent, downloadQualification}}>
           {children} 
        </ClassTeacherContext.Provider>
    );
}