import React,{useEffect, useState, createContext, useContext} from "react";
import {useNavigate} from "react-router-dom";
import { getListStudents, getListTeachers,homeMain, getNotifications } from "../api/home";
import CardUser from "../components/CardUser/CardUser";

const HomeContext = createContext();

export const useHome = () => {
    return useContext(HomeContext);
}

export const HomeProvider = ({children}) => {
    const [Studenst, setStudenst] = useState([]);
    const [Teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getStudenst();
        getTeachers();
        document.title = "Home";
        return () => document.title = "DolHack";
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
            return Teachers?.map((teacher, i) => {
                if(i <= 9){
                    return(
                    <CardUser key={teacher.idusuario} 
                    name={teacher.nombre}
                    lastna={teacher.apellido}
                    description={teacher.biografia}
                    img={teacher.foto}
                    data={teacher.rol}       
                    banner={teacher.banner}
                    />
                    )
                }
            })
        }
        else{
            return Studenst?.map((student, i) => {
                if(i <= 9){
                    return(
                    <CardUser key={student.idusuario} 
                    name={student.nombre} 
                    lastna={student.apellido} 
                    description={student.biografia} 
                    img={student.foto}
                    data={student.rol}
                    banner={student.banner}
                    />
                    )
                }
            })
        }
    }

    const filterUsers=({target:{value}}, urlFilter)=>{ 
      if(urlFilter === "/home"){
        navigate("/teachers")
      }

      if(value === ""){
        if(urlFilter === "/teachers"){
          getTeachers();
        }
        else{
          getStudenst();
        }
      }else{
        if(urlFilter === "/teachers"){
          setTeachers(Teachers.filter((teacher) => teacher.nombre.toLowerCase().includes(value.toLowerCase())));
        }
        else{
          setStudenst(Studenst.filter((student) => student.nombre.toLowerCase().includes(value.toLowerCase())));
        }
      }
    }

    const [main, setMain] = useState({});

    async function MainHomeData(){
        const {data} = await homeMain();
        setMain(data);
    }

    const [notifications, setNotifications] = useState([]);

    async function getNotificationsData(){
      const {data} = await getNotifications();
      setNotifications(data);
    }

    return(
        <HomeContext.Provider value={{selectionUser, filterUsers, MainHomeData, main, getNotificationsData, notifications}}>
            {children}
        </HomeContext.Provider>
    )
}
