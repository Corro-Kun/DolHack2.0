import { createContext, useContext, useState } from "react";
import {MyClasses} from "../api/class"

const ExploreClassContext = createContext();

export const useExploreClassContext = () => useContext(ExploreClassContext);

export function ExploreClassProvider({children}){

    const [List, setList] = useState([{}]);
    const [Index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    async function GetList(){
        const {data} = await MyClasses();
        RefactorList(data);
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

    return(
        <ExploreClassContext.Provider value={{GetList,List, Index, ClickCard, RightClick, LeftClick, isAnimating}} >
            {children}
        </ExploreClassContext.Provider>
    );
}