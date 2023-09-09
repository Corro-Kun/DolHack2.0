import axios from './axios';

export const postClass = (data) => axios.post('/class',data);

export const getClass = () => axios.get('/class');