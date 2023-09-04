import axios from "./axios";

export const getListStudents =()=> axios.get("/home/student");

export const getListTeachers =()=> axios.get("/home/teacher");