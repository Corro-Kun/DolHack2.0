import React from "react";
import {BiX} from "react-icons/bi";
import {AiOutlineHome} from "react-icons/ai";
import "./CreateExam.css";
import {toast} from "sonner";
import { useExam } from "../../context/exam";
import { useNavigate } from "react-router-dom";

function CreateExam(){
    const {changerTitleQuiz, AddQuestion, setNumQuestion, NumQuestion, HandleSubmitQuiz, deleteQuestion} = useExam();
    const navegate = useNavigate();
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
                        <button type="button" style={{marginLeft: "10px", backgroundColor: "red"}} onClick={()=> deleteQuestion()} >Eliminar Pregunta</button>
                    </div>
                </div>
                <div className="CreateExam-Handle" >
                    <button type="submit" >Crear</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default CreateExam;