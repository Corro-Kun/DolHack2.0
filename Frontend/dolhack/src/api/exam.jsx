import axios from "./axios";

export const PostQuiz = async (data) => axios.post("/exam", data);

export const GetQuiz = async () => axios.get("/exam");

export const GetQuizById = async (id) => axios.get(`/quiz/${id}`);

export const AnswerForm = async (id, data) => axios.post("/exam/"+id, data); 

export const DeleteQuiz = async (id) => axios.delete(`/exam/${id}`);

export const GetQuizByIdD = async (id) => axios.get(`/exam/${id}`);   

export const UpdateQuiz = async (id, data) => axios.put(`/exam/${id}`, data);