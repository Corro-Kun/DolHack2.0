import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FristHome from "../page/main/FristHome";
import Login from "../page/main/Login";
import Register from "../page/main/Register";
import Information from "../page/main/Information";
import Service from "../page/main/Service";
import Home from "../page/home/Home";
import Classes from "../page/home/Classes";
import Teachers from "../page/home/Teachers";
import Studens from "../page/home/Studens";
import ProtectRouter from "../security/ProtectRouter";
import Update from "../page/home/Update";
import CreateClass from "../page/home/CreateClass";
import InfoClass from "../page/Class/inclass";
import ClassStudent from "../page/Class/ClassStudent";
import ClassTeacher from "../page/Class/ClassTeacher";
import ClassSetting from "../page/Class/ClassSetting";
import ProtecClass from "../security/ProtecClassTeacher";
import ProtectClass from "../security/ProtecClassStudent";
import ClassList from "../page/Class/ClassList";
import ExamTeacher from "../page/Class/ExamTeacher";
import ExamNew from "../page/Exam/ExamNew";
import ExamAnswer from "../page/Exam/ExamAnswer";
import ClassQuialification from '../page/Class/ClassQuialification';
import ClassCalific from "../page/Class/ClassCalific";
import ExamUpdate from "../page/Exam/ExamUpdate";
import UserList from "../page/home/UserList";
import ListClass from "../page/home/ClassList"
import NotFound from "../page/404";
import ProtecAddClass from "../security/ProtecAddClass";
import ClassLeave from "../page/Class/ClassLeave";
import Notificacions from "../page/home/Notifications";
import ClassStatusStudent from "../page/Class/ClassStatusStudent";
import StateStudent from "../page/Class/StateStudent";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                {/* RUTAS DEL INICIO */}
                <Route path="/" element={<FristHome />} />
                <Route path="/information" element={<Information />} />
                <Route path="/services" element={<Service />} />
                { /* RUTAS DEL LOGIN */ }
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                { /* RUTAS DEL HOME */ }
                <Route element={<ProtectRouter />} >
                    <Route path="/home" element={<Home />} />
                    <Route path="/classes" element={<Classes />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/studens" element={<Studens />} />
                    <Route path="/update" element={<Update />} />
                    <Route element={<ProtecAddClass />} >
                        <Route path="/newclass" element={<CreateClass />} />
                    </Route> 
                    <Route path="/infoclass/:id" element={<InfoClass />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/class" element={<ListClass />} />
                    <Route path="/notification" element={<Notificacions />} />
                    {/* RUTAS PROTEGIDAS DEL PROFESOR */}
                    <Route element={<ProtecClass />} >
                        <Route path="/class/teacher/home" element={<ClassTeacher />} />
                        <Route path="/class/teacher/list" element={<ClassList />} />
                        <Route path="/class/teacher/setting" element={<ClassSetting />} />
                        <Route path="/class/teacher/exam" element={<ExamTeacher />} />
                        <Route path="/class/teacher/new/quiz" element={<ExamNew />} />
                        <Route path="/class/teacher/qualification" element={<ClassQuialification />} />
                        <Route path="/class/teacher/exam/update/:id" element={<ExamUpdate />} />
                        <Route path='/class/teacher/state/:id' element={<StateStudent />} />
                    </Route>
                    <Route element={<ProtectClass />} >
                        <Route path="/class/student/home/" element={<ClassStudent />} />
                        <Route path="/class/student/exam/:id" element={<ExamAnswer />} />
                        <Route path="/class/student/qualification" element={<ClassCalific />} />
                        <Route path="/class/student/state" element={<ClassStatusStudent />} />
                        <Route path="/class/student/leave" element={<ClassLeave />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} /> 
           </Routes>
        </BrowserRouter>
    );
}

export default Router