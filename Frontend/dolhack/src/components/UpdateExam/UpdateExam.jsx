import { useEffect } from "react";
import { useExam } from "../../context/exam";
import "./UpdateExam.css"
import { useParams } from "react-router-dom";

function UpdateExam(){
    const {id} = useParams();
    const {GetEQuizs, EQuizs} = useExam();

    useEffect(()=>{
        GetEQuizs(id);
    },[]);

    return(
        <div className="UpdateExam-Render-div" >
            <div className="UpdateExam-Main" >
                <div className="UpdateExam-title" >
                    <input type="text" placeholder="titulo..." value={EQuizs.titulo} />
                    <textarea name="" placeholder="descripción..." value={EQuizs.descripcion} ></textarea>
                </div>
                <div className="UpdateExam-Inputs" >
                    {
                        EQuizs?.preguntas?.map((pregunta, i) => (
                            <div className="UpdateExam-Question" >
                                <label>1.</label>
                                <input style={{width:"400px"}} type="text" value={pregunta.pregunta} />
                                {
                                    pregunta?.opciones?.map((opcion, a) => (
                                        <div>
                                            <label>{opcion.opcion}.</label>
                                            <input type="text" value={opcion.respuesta} />
                                        </div> 
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="UpdateExam-Button" >
                    <div>
                        <button>Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateExam;