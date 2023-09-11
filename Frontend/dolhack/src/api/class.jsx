import axios from './axios';

export const postClass = (data) => axios.post('/class',data);

export const getClass = () => axios.get('/class');

export const getInfoClass = (id) => axios.post("/class/id",id);