import axios from './axios';

// crear un clase
export const postClass = (data) => axios.post('/class',data);

// lista de clases
export const getClass = () => axios.get('/class');

// informar una clase
export const getInfoClass = (id) => axios.post("/class/"+id);

// muestra tus clases
export const MyClasses = () => axios.get("/yourclass");

// te da la cookie de la clase
export const EnterClass = (id) => axios.get("/enter/class/"+id);

// modificar una clase
export const UpdateClass = (data) => axios.put("/class", data);

// información de la clase que estas viendo
export const getDataClass = () => axios.get("/class/form");

// eliminar una clase
export const deleteClass = () => axios.delete("/class");

// valida el rol de tu clase
export const ValueC = ()=> axios.get("/class/verify");

// te registra en una clase
export const getRegisterClass = (id) => axios.get("/class/register/"+id);

// una lista de los estudiantes de tu clase
export const ListStudent = () => axios.get("/class/student");

// publicar en una clase
export const Postpublic = (data) => axios.post("/class/post", data);

// lista de publicaciones de una clase
export const getPost = () => axios.get("/class/post");

// lista de calificaciones de la clase
export const getQualification = () => axios.get("/qualification");

// calificación de un estudiante
export const StudenQualification = () => axios.get("/qualification/student");

// información de la clase que estas viendo
export const nameClass = () => axios.get("/nameclass");