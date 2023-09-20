import React,{useContext, createContext, useState} from "react";
import {getPost, StudenQualification} from "../api/class";

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
        console.log(data);
        setQualification(data);
    }
    return(
        <ClassStudentContext.Provider value={{consultPost, Post, consultQualification, Qualification}} >
            {children}
        </ClassStudentContext.Provider>
    );
}