import React, { useEffect } from "react";
import {toast} from "sonner";
import "./DashExam.css";
import { useNavigate } from "react-router-dom";
import { useExam } from "../../context/exam";
import {AiTwotoneDelete} from "react-icons/ai"
import {BsPencilSquare} from "react-icons/bs"

function DashExam() {
    const navigate = useNavigate();
    const {GetQuizs, Quizs, DeleteQuizs} = useExam();

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
                        <div className="DashExam-Quizs-title" >
                            <h3>{data.titulo}</h3>
                        </div>
                        <div className="DashExam-Quizs-description" >
                            <p>{data.descripcion}</p>
                        </div>
                        <div className="DashExam-Quizs-button" >
                            <button title="Actualizar" onClick={()=> navigate("/class/teacher/exam/update/"+data.idquiz)} ><BsPencilSquare /></button>
                            <button title="Eliminar" onClick={()=> {
                                toast("¿Seguro que quieres eliminar este examen?",{
                                    action:{
                                        label: "Si",
                                        onClick: () =>{
                                            DeleteQuizs(data.idquiz);
                                        }
                                    }
                                });    
                            }} ><AiTwotoneDelete /></button>
                        </div>
                    </div>
                ))}
            </div>
        </dir>
    </div>
  );
}

export default DashExam;