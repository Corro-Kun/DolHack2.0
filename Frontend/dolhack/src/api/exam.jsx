import axios from "./axios";

export const PostQuiz = async (data) => axios.post("/exam", data);

export const GetQuiz = async () => axios.get("/exam");

export const GetQuizById = async (id) => axios.get(`/quiz/${id}`);