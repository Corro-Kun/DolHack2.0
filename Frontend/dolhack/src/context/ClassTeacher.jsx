import {React, createContext, useContext,  useState} from "react"
import { UpdateClass, getDataClass, deleteClass, ListStudent, Postpublic, getPost, getQualification, getStateClass, changerStateClass, changerStateNotes } from "../api/class";
import {useNavigate} from "react-router-dom";
import { toast } from "sonner";
import { downloadExcen} from "../lib/downloadExcen";
import { getStateStudent } from "../api/exam";

const ClassTeacherContext = createContext()

export function  useClassTeacher(){
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
        let cache = data;
        
        if(cache.nombretipo === "Programación"){        
            cache.tipo_idtipo = 1;
        }else{
            cache.tipo_idtipo = 2;
        }

        if(cache.nombrenivel === "Principiante"){
            cache.nivel_idnivel = 1;
        }
        else if(cache.nombrenivel === "Intermedio"){
            cache.nivel_idnivel = 2;
        }
        else{
            cache.nivel_idnivel = 3;
        }

        setDataClass(cache);
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
        localStorage.removeItem("class");
        navigate("/home");
    }

    async function ListS(){
        const {data} = await ListStudent();
        setList(data);
    }

    function downloadList(){
        let listData = [];
        list.map((data, index)=>{
            listData[index] = {
                "N°": index+1,
                "Nombre": data.nombre,
                "Apellido": data.apellido,
                "Foto": data.foto,
            }
        });
        downloadExcen(listData, "Lista de estudiantes");
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
        if (PostS.post === "" || PostS.post === undefined){
            toast.error("Escribe algo para publicar");
            throw new Error("Escribe algo para publicar");
        }else{
            const {file, post} = PostS;
            const form = new FormData();
            form.append("file", file);
            form.append("post", post);
            const {data} = await Postpublic(form);
            await consultPost();
            setPostS({});
        }
    }

    async function consultPost(){
        const {data} = await getPost();
        setPost(data.reverse());
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
            const filter = list.filter((l)=> l.nombre?.toLowerCase().includes(value.toLowerCase()) || l.apellido?.toLowerCase().includes(value.toLowerCase()));
            setList(filter);
        }
    }

    function downloadQualification(){
        downloadExcen(Listqualification, "Calificación de estudiantes");
        toast.success("Lista de estudiantes descargada");
    }

    const [state, setState] = useState({});

    async function GetStateClass(){
        const {data} = await getStateClass();
        setState(data);
    }

    async function ChangerStateClass(){
        if(state.estado_clase === 1){
            await changerStateClass(0);
            GetStateClass();
        }else{
            await changerStateClass(1);
            GetStateClass();
        }
    }

    async function ChangerStateNotes(){
        await changerStateNotes();
        GetStateClass();
    }

    const [stateNotes, setStateNotes] = useState({});

    async function GetStateStudent(id){
        const {data} = await getStateStudent(id);
        setStateNotes(data);
    }

    return(
        <ClassTeacherContext.Provider value={{getData, dataClass, changerDataClass, handleSubmitDataClass, DeleteClassT, ListS, list, downloadList, changerPost, HandlePost, consultPost, post, ListQualification, Listqualification, FilterStudent, downloadQualification, state, GetStateClass, ChangerStateClass, ChangerStateNotes, GetStateStudent, stateNotes}}>
           {children} 
        </ClassTeacherContext.Provider>
    );
}