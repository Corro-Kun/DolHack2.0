import React,{useContext, createContext, useState} from "react";
import {getPost} from "../api/class";

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
    return(
        <ClassStudentContext.Provider value={{consultPost, Post}} >
            {children}
        </ClassStudentContext.Provider>
    );
}