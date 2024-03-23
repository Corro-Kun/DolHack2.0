import React, { useEffect } from "react";
import {BiX} from "react-icons/bi";
import {AiOutlineHome} from "react-icons/ai";
import "./CreateExam.css";
import {toast} from "sonner";
import { useExam } from "../../context/exam";
import { useNavigate } from "react-router-dom";

function CreateExam(){
    const {changerTitleQuiz, AddQuestion, setNumQuestion, NumQuestion, HandleSubmitQuiz, deleteQuestion, SaveP, TotalQualification} = useExam();
    const navegate = useNavigate();

    useEffect(()=>{
        SaveP();
    },[NumQuestion]);

    return(
        <div className="CreateExam-Div-Render" >
            <div className="CreateExam-Main">
                <div className="CreateExam-Title" >
                    <h1 onClick={()=> navegate("/class/teacher/exam")} ><BiX /></h1>
                    <h2>Crea tu examen</h2>
                    <h1 onClick={()=> navegate("/home")} ><AiOutlineHome /></h1>
                </div>
                <form onSubmit={(e)=> toast.promise(HandleSubmitQuiz(e),{
                    loading: "Creando examen...",
                    success: "Examen creado con exito",
                    error: "Error al crear examen"
                })}>
                <div className="CreateExam-Data-Main" >
                    <input type="text" name="title" placeholder="Titulo de tu examen..." required onChange={(e)=> changerTitleQuiz(e)} />
                    <textarea name="description" placeholder="Descripción o consejos de este examen" required onChange={(e)=> changerTitleQuiz(e)} />
                </div>
                <div className="CreateExam-List-Quiz" >
                    {
                        AddQuestion()

                    }
                    <div className="CreateExam-More-Quiz" >
                        <button type="button" onClick={()=> setNumQuestion(NumQuestion + 1)} >Añadir Pregunta</button>
                        <button type="button" style={{marginLeft: "10px", backgroundColor: "red"}} onClick={()=> {
                            if(NumQuestion === 1){
                                return;
                            }
                            deleteQuestion();
                        }} >Eliminar Pregunta</button>
                    </div>
                </div>
                <div className="CreateExam-Handle" >
                    <div className="CreateExam-Handle-1">
                        <p>{TotalQualification === 100 ? "¡Puedes Crear el examen!" : "Tus opciones no suman 100"}</p>
                        <button type="submit" >Crear</button>
                    </div>
                    <div className="CreateExam-Handle-2">
                        <p className={TotalQualification === 100 ? "CreateExam-Handle-p-blue": "CreateExam-Handle-p-red"} >{TotalQualification}%</p>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
}

export default CreateExam;