import { useEffect } from "react";
import { useExam } from "../../context/exam";
import "./UpdateExam.css"
import { useParams, useNavigate } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "sonner";

function UpdateExam(){
    const navigate = useNavigate();

    const {id} = useParams();
    const {GetEQuizs, EQuizs, changerUpdateQuizs, UpdateQuizs, addOption, deleteOption, changerUpdatePoints} = useExam();

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
                                <div className="UpdateExam-Question-Render" >
                                    <div>
                                        <label>1.</label>
                                        <input type="text" name="pregunta" defaultValue={pregunta.pregunta}  onChange={(e)=> changerUpdateQuizs(e,i,0,"p")} />
                                    </div>
                                   <input style={{width: "5%", border: "1px solid var(--Main_Color)", textAlign: "center", color: "var(--Main_Color)"}} type="text" value={pregunta.puntos} onChange={(e)=> changerUpdatePoints(e,i)} />
                                </div>
                                {
                                    pregunta?.opciones?.map((opcion, a) => (
                                        <div key={a} className="UpdateExam-Option" >
                                            <label style={{color: opcion.calificacion === 1? "var(--Main_Color)": ""}} title={opcion.calificacion === 1? "respuesta correcta": "respuesta incorrecta"} >{opcion.opcion}.</label>
                                            <input type="text" name="respuesta" defaultValue={opcion.respuesta} onChange={(e)=> changerUpdateQuizs(e, i, a, "o")} />
                                            {
                                                opcion.calificacion === 1?
                                                <p></p>
                                                :
                                                <button style={{background: "red", color: "white"}} type="button" onClick={()=> deleteOption(opcion.idopcion, pregunta.idpregunta, i)} > <AiTwotoneDelete /> </button>
                                            }
                                        </div> 
                                    ))
                                }
                                {
                                    pregunta?.opciones?.length < 4?
                                    <button className="UpdateExam-Question-Button" type="button" onClick={()=> addOption(pregunta.idpregunta, i)} >Agregar opcion</button>
                                    :
                                    <p></p>
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
                        })} style={{backgroundColor: "var(--Main_Color)", color: "#fff"}} >Actualizar</button>
                        <button onClick={()=> navigate("/class/teacher/exam")} style={{backgroundColor: "red", color: "#fff", marginLeft: "100px"}} >Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateExam;