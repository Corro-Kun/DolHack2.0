import axios from "./axios";

// crear examen
export const PostQuiz = async (data) => axios.post("/exam", data, {
    headers:{
        "token": localStorage.getItem("token"),
        "class": localStorage.getItem("class")
    }
});

// obtener examens
export const GetQuiz = async () => axios.get("/exam", {
    headers:{
        "class": localStorage.getItem("class"),
        "token": localStorage.getItem("token")
    }

});

// obtener el examen por id
export const GetQuizById = async (id) => axios.get(`/quiz/${id}`);

// verificar si el estudiante ya realizo el examen
export const verifyQuiz = async (id) => axios.get(`/exam/verify/${id}`,{
    headers:{
        "token": localStorage.getItem("token")
    }
});

// enviar respuestas
export const AnswerForm = async (id, data) => axios.post("/exam/"+id, data, {
    headers:{
        "token": localStorage.getItem("token"),
        "class": localStorage.getItem("class")
    }
}); 

// Eliminar examen
export const DeleteQuiz = async (id) => axios.delete(`/exam/${id}`, {
    headers:{
        "class": localStorage.getItem("class")
    }
});

export const GetQuizByIdD = async (id) => axios.get(`/exam/${id}`, {
    headers:{
        "class": localStorage.getItem("class")
    }
});   

export const UpdateQuiz = async (id, data) => axios.put(`/exam/${id}`, data, {
    headers:{
        "class": localStorage.getItem("class")
    }
});

export const PublishQuiz = async (id) => axios.put(`/exam/public/${id}`)

export const GetState = async () => axios.get("/exam/state", {
    headers:{
        "token": localStorage.getItem("token"),
        "class": localStorage.getItem("class")
    }
});