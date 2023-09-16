import axios from "./axios";

export const PostQuiz = async (data) => axios.post("/exam", data);

export const GetQuiz = async () => axios.get("/exam");