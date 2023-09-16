import React, { useEffect } from "react";
import "./DashExam.css";
import { useNavigate } from "react-router-dom";
import { useExam } from "../../context/exam";

function DashExam() {
    const navigate = useNavigate();
    const {GetQuizs, Quizs} = useExam();

    useEffect(()=>{
        GetQuizs();
    },[])

  return (
    <div className="DashExam-Div-Render" >
        <dir className="DashExam-Main" >
            <div className="DashExam-Title" >
                <h2>Tus Exámenes</h2>
                <button onClick={()=> navigate("/class/teacher/new/quiz")} >Crear</button>
            </div>
            <div className="DashExam-content" >
                {Quizs.map((data, i) => (
                    <div key={i} className="DashExam-Quizs" >
                        <h3>{data.titulo}</h3>
                        <h3>{i+1}</h3>
                    </div>
                ))}
            </div>
        </dir>
    </div>
  );
}

export default DashExam;