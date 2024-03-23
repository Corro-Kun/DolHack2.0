import React, { useEffect } from "react";
import {toast} from "sonner";
import "./DashExam.css";
import { useNavigate } from "react-router-dom";
import { useExam } from "../../context/exam";
import {AiTwotoneDelete} from "react-icons/ai"
import {BsPencilSquare, BsSignpostFill} from "react-icons/bs"

function DashExam() {
    const navigate = useNavigate();
    const {GetQuizs, Quizs, DeleteQuizs, PutExamPublic} = useExam();


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
                        {
                            data.publicado === 0 ? 
                            <div className="DashExam-Quizs-button" >
                                <button title="publicar" onClick={()=> toast("¿Quieres publicar tu examen?, esta acción no es reversible.",{
                                    action:{
                                        label: "Si",
                                        onClick: () => {
                                            toast.promise(PutExamPublic(data.idquiz),{
                                                loading: "Publicando examen...",
                                                success: "Examen publicado",
                                                error: "Error al publicar el examen"
                                            });
                                        },
                                    },
                                    cancel:{label:"No"}
                                })} ><BsSignpostFill /></button>
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
                        :
                            <p style={{color:"var(--Main_Color)"}} >Publicado</p>
                        }
                    </div>
                ))}
            </div>
        </dir>
    </div>
  );
}

export default DashExam;