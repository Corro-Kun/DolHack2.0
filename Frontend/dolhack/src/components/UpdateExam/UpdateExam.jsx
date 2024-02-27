import { useEffect } from "react";
import { useExam } from "../../context/exam";
import "./UpdateExam.css"
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";

function UpdateExam(){
    const navigate = useNavigate();

    const {id} = useParams();
    const {GetEQuizs, EQuizs, changerUpdateQuizs, UpdateQuizs} = useExam();

    useEffect(()=>{
        GetEQuizs(id);
    },[]);

    return(
        <div className="UpdateExam-Render-div" >
            <div className="UpdateExam-Main" >
                <div className="UpdateExam-title" >
                    <input type="text" placeholder="titulo..." name="titulo" value={EQuizs.titulo} onChange={(e)=> changerUpdateQuizs(e,0,0,"m")} />
                    <textarea placeholder="descripción..." name="descripcion" value={EQuizs.descripcion} onChange={(e)=> changerUpdateQuizs(e,0,0,"m")} ></textarea>
                </div>
                <div className="UpdateExam-Inputs" >
                    {
                        EQuizs?.preguntas?.map((pregunta, i) => (
                            <div key={i} className="UpdateExam-Question" >
                                <label>1.</label>
                                <input style={{width:"400px"}} type="text" name="pregunta" defaultValue={pregunta.pregunta}  onChange={(e)=> changerUpdateQuizs(e,i,0,"p")} />
                                {
                                    pregunta?.opciones?.map((opcion, a) => (
                                        <div key={a} >
                                            <label>{opcion.opcion}.</label>
                                            <input type="text" name="respuesta" defaultValue={opcion.respuesta} onChange={(e)=> changerUpdateQuizs(e, i, a, "o")} />
                                        </div> 
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="UpdateExam-Button" >
                    <div>
                        <button onClick={()=>toast.promise(UpdateQuizs(id),{
                            loading: "Actualizando...",
                            success: "Examen Actualizado",
                            error: (e) => e.response.data.message
                        })} >Actualizar</button>
                        <button onClick={()=> navigate("/class/teacher/exam")} style={{backgroundColor: "red", color: "#fff", marginLeft: "100px"}} >Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateExam;