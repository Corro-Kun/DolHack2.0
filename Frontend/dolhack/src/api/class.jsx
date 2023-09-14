import axios from './axios';

export const postClass = (data) => axios.post('/class',data);

export const getClass = () => axios.get('/class');

export const getInfoClass = (id) => axios.post("/class/"+id);

export const MyClasses = () => axios.get("/yourclass");

export const EnterClass = (id) => axios.get("/enter/class/"+id);

export const UpdateClass = (data) => axios.put("/class", data);

export const getDataClass = () => axios.get("/class/form");

export const deleteClass = () => axios.delete("/class");

export const ValueC = ()=> axios.get("/class/verify");

export const getRegisterClass = (id) => axios.get("/class/register/"+id);