import { useContext, createContext } from "react";
import {YourList} from "../api/auth";
import { useState } from "react";

export const ExploreUserContext = createContext();

export const useExploreUser = () => {
    return useContext(ExploreUserContext);
}

export function ExploreUserProvider({ children }) {
    
    const [List,setList] = useState([{}]);

    async function GetListUser(){
        const {data} = await YourList();
        console.log(data);
        setList(data);
    }

    return (
        <ExploreUserContext.Provider value={{GetListUser, List}}>
            {children}
        </ExploreUserContext.Provider>
    );
}