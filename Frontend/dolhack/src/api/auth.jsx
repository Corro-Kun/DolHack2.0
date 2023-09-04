import axios from "./axios.jsx";

export const login = (data)=> axios.post("/auth/login",data);

export const register = (data)=> axios.post("/auth/register",data);

export const complet = (data)=> axios.post("/auth/complet",data);

export const profile = ()=> axios.get("/auth/profile");
