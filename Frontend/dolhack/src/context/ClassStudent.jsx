import React,{useContext, createContext, useState} from "react";
import {getPost, StudenQualification, nameClass} from "../api/class";

const ClassStudentContext = createContext();

export function useClassStudent(){
    return useContext(ClassStudentContext);
}

export function ClassStudentProvider({children}){
    const [Post, setPost] = useState([]);

    async function consultPost(){
        const {data} = await getPost();
        setPost(data);
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

    return(
        <ClassStudentContext.Provider value={{consultPost, Post, consultQualification, Qualification, nameClasss, classs}} >
            {children}
        </ClassStudentContext.Provider>
    );
}