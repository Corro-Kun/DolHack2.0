import { createContext, useContext, useState } from "react";
import {EnterClass, MyClasses, ValueC} from "../api/class"
import {toast} from "sonner";
import { useNavigate } from "react-router-dom";

const ExploreClassContext = createContext();

export const useExploreClassContext = () => useContext(ExploreClassContext);

export function ExploreClassProvider({children}){

    const [List, setList] = useState([{}]);
    const [Index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    async function GetList(){
        const {data} = await MyClasses();
        if(data.length > 0){
            RefactorList(data);
        }else{
            setList([]);
        }
    }

    function RefactorList(data){
        let list = data;
        data.map((item, i)=>{
            list[i].active = false;
        })
        list[0].active = true;
        setList(list);
    }

    function ClickCard(indexCard){
        setIsAnimating(true);

        setTimeout(()=>{
            setIsAnimating(false);

            let list = List;
            list[Index].active = false;
            list[indexCard].active = true;
            setList(list);
            setIndex(indexCard); 
        },200);
    }

    function RightClick(){
        let list = List;
        if(Index < list.length-1){

            setIsAnimating(true);

            setTimeout(()=>{
                setIsAnimating(false);

                list[Index].active = false;
                list[Index+1].active = true;
                setList(list);
                setIndex(Index+1); 
            },200);
        }else{
            LeftClick();
        }
    }

    function LeftClick(){
        let list = List;
        if(Index > 0){
            setIsAnimating(true);

            setTimeout(()=>{
                setIsAnimating(false);

                list[Index].active = false;
                list[Index-1].active = true;
                setList(list);
                setIndex(Index-1);
            },200);
        }else{
            RightClick();
        }
        
    }

    async function EnterYourClass(id){
        try {
            const auth = await EnterClass(id);
            localStorage.setItem("class", auth?.data?.token);
            const {data} = await ValueC();
            if(data === 2){
                navigate("/class/student/home");
            }else{
                navigate("/class/teacher/home");
            }
        } catch (error) {
            toast.error("Error al entrar a la clase");
        }
    }

    function FilterList({target: {value}}){
        if(value === ""){
            GetList();
        }else{
            let list = List;
            list = list.filter(item => item.titulo.toLowerCase().includes(value.toLowerCase()));
            setList(list);
        }
    }

    return(
        <ExploreClassContext.Provider value={{GetList,List, Index, ClickCard, RightClick, LeftClick, isAnimating, EnterYourClass, FilterList}} >
            {children}
        </ExploreClassContext.Provider>
    );
}