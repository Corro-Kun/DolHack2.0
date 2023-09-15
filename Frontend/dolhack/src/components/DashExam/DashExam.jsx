import React from "react";
import "./DashExam.css";
import { useNavigate } from "react-router-dom";

function DashExam() {
    const navigate = useNavigate();
  return (
    <div className="DashExam-Div-Render" >
        <dir className="DashExam-Main" >
            <div className="DashExam-Title" >
                <h2>Tus Exámenes</h2>
                <button onClick={()=> navigate("/class/teacher/new/quiz")} >Crear</button>
            </div>
            <div className="DashExam-content" >
                <div className="DashExam-Quizs" >
                    <h3>bases de la programación</h3>
                    <h3>1</h3>
                </div>
                <div className="DashExam-Quizs" >
                    <h3>bases de la programación</h3>
                    <h3>1</h3>
                </div>
            </div>
        </dir>
    </div>
  );
}

export default DashExam;