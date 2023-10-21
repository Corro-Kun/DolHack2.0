import axios from "./axios";

// crear examen
export const PostQuiz = async (data) => axios.post("/exam", data);

// obtener examens
export const GetQuiz = async () => axios.get("/exam");

// obtener el examen por id
export const GetQuizById = async (id) => axios.get(`/quiz/${id}`);

// verificar si el estudiante ya realizo el examen
export const verifyQuiz = async (id) => axios.get(`/exam/verify/${id}`);

// enviar respuestas
export const AnswerForm = async (id, data) => axios.post("/exam/"+id, data); 

// Eliminar examen
export const DeleteQuiz = async (id) => axios.delete(`/exam/${id}`);

export const GetQuizByIdD = async (id) => axios.get(`/exam/${id}`);   

export const UpdateQuiz = async (id, data) => axios.put(`/exam/${id}`, data);