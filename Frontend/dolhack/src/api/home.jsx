import axios from "./axios";

export const getListStudents =()=> axios.get("/home/student");

export const getListTeachers =()=> axios.get("/home/teacher");

export const homeMain =()=> axios.get("/home/main");

export const getNotifications =()=> axios.get("/home/notification",{
    headers:{
        "token": localStorage.getItem("token")
    }
});