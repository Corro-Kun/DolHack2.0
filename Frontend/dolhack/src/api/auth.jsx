import axios from "./axios.jsx";

export const login = (data)=> axios.post("/auth/login",data);

export const profile = ()=> axios.get("/auth/profile");