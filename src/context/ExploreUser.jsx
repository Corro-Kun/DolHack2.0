import { useContext, createContext } from "react";
import {YourList} from "../api/auth";
import { useState } from "react";

export const ExploreUserContext = createContext();

export const useExploreUser = () => {
    return useContext(ExploreUserContext);
}

export function ExploreUserProvider({ children }) {
    
    const [List,setList] = useState([{}]);
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    async function GetListUser(){
        const {data} = await YourList();
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

    function FilterList({target: {value}}){
        if(value.length > 0){
            let list = List;
            list = list.filter(item => item.nombre.toLowerCase().includes(value.toLowerCase()) || item.apellido.toLowerCase().includes(value.toLowerCase()));
            setList(list);
        }else{
            GetListUser();
        }
    }

    function ClickCard(indexCard){
        setIsAnimating(true);

        setTimeout(()=>{
            setIsAnimating(false);

            let list = List;
            list[index].active = false;
            list[indexCard].active = true;
            setList(list);
            setIndex(indexCard); 
        },200);
    }

    function RightClick(){
        let list = List;
        if(index < list.length-1){

            setIsAnimating(true);

            setTimeout(()=>{
                setIsAnimating(false);

                list[index].active = false;
                list[index+1].active = true;
                setList(list);
                setIndex(index+1); 
            },200);
        }else{
            LeftClick();
        }
    }

    function LeftClick(){
        let list = List;
        if(index > 0){
            setIsAnimating(true);

            setTimeout(()=>{
                setIsAnimating(false);

                list[index].active = false;
                list[index-1].active = true;
                setList(list);
                setIndex(index-1);
            },200);
        }else{
            RightClick();
        }
        
    }

    return (
        <ExploreUserContext.Provider value={{GetListUser, List, index, ClickCard, RightClick, LeftClick, isAnimating, FilterList}}>
            {children}
        </ExploreUserContext.Provider>
    );
}