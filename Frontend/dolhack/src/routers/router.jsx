import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FristHome from "../page/FristHome";
import Login from "../page/Login";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FristHome />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router