import React,{useEffect, useState, createContext, useContext} from "react";
import { getListStudents, getListTeachers } from "../api/home";
import CardUser from "../components/CardUser/CardUser";

const HomeContext = createContext();

export const useHome = () => {
    return useContext(HomeContext);
}

export const HomeProvider = ({children}) => {
    const [Studenst, setStudenst] = useState([]);
    const [Teachers, setTeachers] = useState([]);

    useEffect(()=>{
        getStudenst();
        getTeachers();
    },[]);

    async function getStudenst(){
        const {data} = await getListStudents();
        setStudenst(data);
    }

    async function getTeachers(){
        const {data} = await getListTeachers();
        setTeachers(data);
    }

    function selectionUser(teacher){
        if(teacher){
            return Teachers?.map((teacher, i) => (
                <CardUser key={teacher.idusuario} 
                name={teacher.nombre}
                lastna={teacher.apellido}
                description={teacher.biografia}
                img={teacher.foto}
                data={teacher.rol}       
                />
            ))
        }
        else{
            return Studenst?.map((student, i) => (
                    <CardUser key={student.idusuario} 
                    name={student.nombre} 
                    lastna={student.apellido} 
                    description={student.biografia} 
                    img={student.foto}
                    data={student.rol}
                    />
                ))
        }
    }

    return(
        <HomeContext.Provider value={{selectionUser}}>
            {children}
        </HomeContext.Provider>
    )
}