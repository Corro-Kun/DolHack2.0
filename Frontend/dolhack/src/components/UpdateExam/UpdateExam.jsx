import { useEffect } from "react";
import { useExam } from "../../context/exam";
import "./UpdateExam.css"
import { useParams } from "react-router-dom";

function UpdateExam(){
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
                        <button onClick={()=>UpdateQuizs(id)} >Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateExam;