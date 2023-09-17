import { useEffect } from "react";
import { useExam } from "../../context/exam";
import "./AnswerQuiz.css"
import { useParams, useNavigate } from "react-router-dom";
import {toast} from "sonner";

function AnswerQuiz(){
    const {id} = useParams();
    const {GetQuizId, QuizId} = useExam();
    const navigate = useNavigate();

    useEffect(()=>{
        GetQuizId(id);
    },[]);

    return(
        <div className="AnswerQuiz-Div-Render" >
            <div className="AnswerQuiz-Main" >
                <div className="AnswerQuiz-Title" >
                    <h2>{QuizId.titulo}</h2>
                    <p>{QuizId.descripcion}</p>
                </div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    toast.success("Examen enviado");
                    navigate("/class/student/home");
                }}>
                <div className="AnswerQuiz-Questions" >
                    {
                        QuizId.preguntas?.map((pregunta, index) => (
                        <div className="AnswerQuiz-Question" key={index} >
                                <h3>{index + 1}. {pregunta.pregunta}</h3>
                            <div className="AnswerQuiz-Options" >
                                {
                                    pregunta.opciones?.map((opcion, index) => (
                                        <div key={index} >
                                            <input type="radio" required name={pregunta.idpregunta} />
                                            <label>{opcion.opcion}. {opcion.respuesta} </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        ))
                    }
                </div>
                <div className="AnswerQuiz-button" >
                    <button type="submit" >Enviar</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default AnswerQuiz;