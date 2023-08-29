import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FristHome from "../page/FristHome";
import Login from "../page/Login";
import Register from "../page/Register";
import Information from "../page/Information";
import Service from "../page/Service";
import Home from "../page/Home";
import Classes from "../page/Classes";
import Teachers from "../page/Teachers";
import Studens from "../page/Studens";

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