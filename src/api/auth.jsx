import axios from "./axios.jsx";


export const login = (data)=> axios.post("/auth/login",data);

export const register = (data)=> axios.post("/auth/register",data);

export const complet = (data)=> axios.post("/auth/complet",data, {
    headers:{
        "token": localStorage.getItem("token")
    }
});

export const profile = ()=> axios.get("/auth/profile", {
    headers:{
        "token": localStorage.getItem("token")
    }
});

export const update = (data) => axios.post("/auth/update", data, {
    headers:{
        "token": localStorage.getItem("token")
    }
});

export const valid = () => axios.get("/auth/valid", {
    headers:{
        "token": localStorage.getItem("token")
    }
});

export const logout = () => axios.get("/auth/logout");

export const YourList = () => axios.get("/home/peopleList", {
    headers:{
        "token": localStorage.getItem("token")
    }
});