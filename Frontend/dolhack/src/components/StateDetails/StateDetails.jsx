import { useEffect } from "react";
import { useClassTeacher } from "../../context/ClassTeacher";
import "./StateDetails.css";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

function StateDetails(){
    const {GetStateStudent, stateNotes} = useClassTeacher();
    const {id} = useParams();
    const navegate = useNavigate();

    useEffect(()=>{
        GetStateStudent(id);
    },[]);

    return(
        <div className="StateDetails-Render" >
            <div className="StateDetails-Div" >
                <div className="StateDetails-Bar" >
                    <h2 onClick={()=> navegate("/class/teacher/list")} ><MdOutlineClose /></h2>
                </div>
                <div className="StateDetails-Data-User" >
                    <picture>
                        <img src={stateNotes.imagen} alt="" />
                    </picture>
                    <h3>{stateNotes.nombre} {stateNotes.apellido}</h3>
                    <h3 style={{marginBottom: "10px"}} >{stateNotes.correo}</h3>
                </div>
                <div className="ShapeNotebook-Static" style={{padding: "5px 10px"}} >
                    <p>Las Notas de curso:</p>
                    <h3 style={{textAlign: "center"}} >{stateNotes.totalCalificacion}%</h3>
                    <div className="ShapeNotebook-Static-bar" >
                        <h4>0%</h4>
                        <div className="ShapeNotebook-Static-bar-shape" >
                            <div style={{background: `${stateNotes.totalCalificacion > 60 ? "var(--Main_Color)": "red"}`, width: `${stateNotes.totalCalificacion}%`}} />
                        </div>
                        <h4>100%</h4>
                    </div>
                    <h3 style={{textAlign: "center"}} >{stateNotes.totalCalificacion > 60 ? "¡El alumno va al dia!": "¡El alumno no cumple con el mínimo!"}</h3>
                    <div style={{display: "flex", justifyContent: "space-between", paddingTop: "20px"}} >
                        <div>
                            <h2 style={{textAlign: "center"}} >{stateNotes.totalExamenes-stateNotes.examenesRespondidos}</h2>
                            <p>Exámenes que debe</p>
                        </div>
                        <div>
                            <h2 style={{textAlign: "center"}} >{stateNotes.examenesRespondidos}</h2>
                            <p>Exámenes hechos</p>
                        </div>
                    </div>
                    <div style={{marginTop: "10px",paddingTop: "10px",borderTop: "1px solid #4e4e4e"}} >
                        <h3>Exámenes pendientes</h3>
                    </div>
                    <div className="ShapeNotebook-List-NotAnswer" >
                        {
                            stateNotes?.examenesPendientes?.length > 0 ?
                            stateNotes?.examenesPendientes?.map((item, index)=>(
                                <p key={index} >{index+1}. {item}</p>
                            ))
                            : <p style={{color: "GrayText", textAlign: "center"}}>No hay exámenes pendientes</p>
                        }
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default StateDetails;