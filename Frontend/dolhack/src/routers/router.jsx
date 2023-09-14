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
                    <Route path="/newclass" element={<CreateClass />} />
                    <Route path="/infoclass/:id" element={<InfoClass />} />
                    {/* RUTAS PROTEGIDAS DEL PROFESOR */}
                    <Route element={<ProtecClass />} >
                        <Route path="/class/teacher/home" element={<ClassTeacher />} />
                        <Route path="/class/teacher/setting" element={<ClassSetting />} />
                    </Route>
                    <Route element={<ProtectClass />} >
                        <Route path="/class/student/home" element={<ClassStudent />} />
                    </Route>
                </Route>
           </Routes>
        </BrowserRouter>
    );
}

export default Router