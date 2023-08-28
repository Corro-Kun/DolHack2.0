import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FristHome from "../page/FristHome";
import Login from "../page/Login";
import Register from "../page/Register";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FristHome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/home" element={<h2>Home</h2>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router