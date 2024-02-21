import React,{useContext, createContext, useState} from "react";
import {getPost, StudenQualification, nameClass, quiteClass} from "../api/class";
import { useNavigate } from "react-router-dom";
import { verifyQuiz } from "../api/exam";
import {toast} from "sonner";

const ClassStudentContext = createContext();

export function useClassStudent(){
    return useContext(ClassStudentContext);
}

export function ClassStudentProvider({children}){
    const navigate = useNavigate();

    const [Post, setPost] = useState([]);

    async function consultPost(){
        const {data} = await getPost();
        setPost(data.reverse());
    }

    const [Qualification, setQualification] = useState([]);

    async function consultQualification(){
        const {data} = await StudenQualification();
        setQualification(data);
    }

    const [classs, setClasss] = useState({});

    async function nameClasss(){
        const {data} = await nameClass();
        setClasss(data);
    }

    async function verify(id){
        const {data} = await verifyQuiz(id);
        if(data){
            navigate("/class/student/exam/"+ id)            
        }else{
            toast.error("Ya has realizado este examen");
        }

    }

    async function leaveClass(){
        try{
            await quiteClass();
            navigate("/home");
        }catch(err){
            console.log(err);
        }
    }

    return(
        <ClassStudentContext.Provider value={{consultPost, Post, consultQualification, Qualification, nameClasss, classs, verify, leaveClass}} >
            {children}
        </ClassStudentContext.Provider>
    );
}