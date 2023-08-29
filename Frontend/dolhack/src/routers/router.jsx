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
                <Route path="/home" element={<Home />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/studens" element={<Studens />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router