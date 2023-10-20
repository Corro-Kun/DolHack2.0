import React, { Suspense } from "react";
import "./BarHome.css";
import {FaRegCompass} from "react-icons/fa"
import {GiClassicalKnowledge} from "react-icons/gi"
import {FaChalkboardTeacher} from "react-icons/fa"
import {PiStudentFill} from "react-icons/pi"
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/profile";

function BarHome({home, classs, teacher, studen}) {
    const {DataProfile} = useProfile();
    const navigate = useNavigate();
    return(
        <div className="Explorer-Home">
            <div className="Title-Div">
                <h2 onClick={()=> navigate("/home")} >Explore</h2>
                <Suspense fallback={<h2>Cargando...</h2>}>
                {
                    DataProfile.rol === "profesor" ? <button onClick={()=> navigate("/newclass")} >Crear Clase</button> : null
                }
                </Suspense>
            </div>
            <div className="List-Home">
                <ul id={ home ? "Active-Home" : "" } onClick={() => navigate("/home")} ><samp><FaRegCompass /></samp><p>Home</p></ul>
                <ul id={ classs ? "Active-Home" : "" } onClick={() => navigate("/classes")} ><samp><GiClassicalKnowledge /></samp><p>Clases</p></ul>
                <ul id={ teacher ? "Active-Home" : "" } onClick={() => navigate("/teachers")} ><samp><FaChalkboardTeacher /></samp><p>Profesores</p></ul>
                <ul id={ studen ? "Active-Home" : "" } onClick={() => navigate("/studens")} ><samp><PiStudentFill /></samp><p>Estudiantes</p></ul>
            </div>
            <div className="Render-Div-Home">
                <div className="Message-Home">
                    <h3 id="Message">DolHack <samp className="multiText" ></samp></h3>
                </div>
            </div>
        </div>
    );
}

export default BarHome;