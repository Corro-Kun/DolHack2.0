import axios from "./axios";

export const PostQuiz = async (data) => axios.post("/exam", data);