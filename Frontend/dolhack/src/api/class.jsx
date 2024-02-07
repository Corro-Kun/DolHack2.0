import axios from './axios';

// crear un clase
export const postClass = (data) => axios.post('/class',data, {
    headers:{
        "token": localStorage.getItem("token")
    }
});

// lista de clases
export const getClass = () => axios.get('/class');

// informar una clase
export const getInfoClass = (id) => axios.post("/class/"+id);

// muestra tus clases
export const MyClasses = () => axios.get("/yourclass", {
    headers:{
        "token": localStorage.getItem("token")
    }
});

// te da la cookie de la clase
export const EnterClass = (id) => axios.get("/enter/class/"+id);

// modificar una clase
export const UpdateClass = (data) => axios.put("/class", data, {
    headers:{
        "token": localStorage.getItem("token"),
        "class": localStorage.getItem("class")
    }
});

// información de la clase que estas viendo
export const getDataClass = () => axios.get("/class/form",{
    headers:{
        "class": localStorage.getItem("class")
    }
});

// eliminar una clase
export const deleteClass = () => axios.delete("/class", {
    headers:{
        "token": localStorage.getItem("token"),
        "class": localStorage.getItem("class")
    }
});

// valida el rol de tu clase
export const ValueC = ()=> axios.get("/class/verify", {
    headers:{
        "class": localStorage.getItem("class"),
        "token": localStorage.getItem("token")
    }
});

// te registra en una clase
export const getRegisterClass = (id) => axios.get("/class/register/"+id,{
    headers:{
        "token": localStorage.getItem("token")
    }
});

// una lista de los estudiantes de tu clase
export const ListStudent = () => axios.get("/class/student", {
    headers:{
        "class": localStorage.getItem("class")
    }
});

// publicar en una clase
export const Postpublic = (data) => axios.post("/class/post", data, {
    headers:{
        "class": localStorage.getItem("class"),
        "token": localStorage.getItem("token")
    }
});

// lista de publicaciones de una clase
export const getPost = () => axios.get("/class/post", {
    headers:{
        "class": localStorage.getItem("class")
    }
});

// lista de calificaciones de la clase
export const getQualification = () => axios.get("/qualification", {
    headers:{
        "class": localStorage.getItem("class")
    }
});

// calificación de un estudiante
export const StudenQualification = () => axios.get("/qualification/student", {
    headers:{
        "class": localStorage.getItem("class"),
        "token": localStorage.getItem("token")
    }
});

// información de la clase que estas viendo
export const nameClass = () => axios.get("/nameclass", {
    headers:{
        "class": localStorage.getItem("class")
    }
});
