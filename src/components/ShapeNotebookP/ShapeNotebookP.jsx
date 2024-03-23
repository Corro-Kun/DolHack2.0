import BodyPageNote from "../BodyPageNote/BodyPageNote";
import BodyPublication from "../BodyPublication/BodyPublication";
import List from "../List/List";
import Publication from "../Publication/Publication";
import { useNavigate } from "react-router-dom";
import { FaArrowsRotate, FaXmark, FaClipboardList, FaCheckDouble, FaRegAddressCard, FaRegTrashCan} from "react-icons/fa6";
import { useClassStudent } from "../../context/ClassStudent";
import { useEffect } from "react";
import { useExam } from "../../context/exam";
import "./ShapeNotebookP.css";

function ShapeNotebookP(){
    const navigate = useNavigate();
    const {consultPost, Post, nameClasss, classs} = useClassStudent();
    const {State, StateTotalGet, getExamNotAnswer, NotQuiz} = useExam();
    
    useEffect(()=>{
        consultPost();
        nameClasss();
        StateTotalGet();
        getExamNotAnswer();
    },[]);
    return(
        <div className="ShapeNotebook-Div-Render" >
            <div className="ShapeNotebook-Div" >
                <div className="ShapeNotebook-page1" >
                    <div className="ShapeNotebook-Bar-1" >
                        <h2 title="Salir" onClick={()=> {
                            localStorage.removeItem("class");
                            navigate("/home");
                        }} ><FaXmark /></h2>
                        <h3>Publicaciones de tu profesor</h3>
                        <h2 title="Actualizar" onClick={()=> consultPost()} ><FaArrowsRotate /></h2>
                    </div> 
                    <BodyPublication>
                        {
                            Post.length > 0 ? 
                            Post.map((item, index)=>(
                            <Publication key={index} contenet={item.texto} name={item.nombre} img={item.foto} last={item.apellido} image={item.imagen} />
                            ))
                            : <p style={{color: "GrayText"}}>Aun no hay publicaciones del docente</p>
                        }
                    </BodyPublication>
                </div>
                <div className="ShapeNotebook-page2" >
                    <div className="ShapeNotebook-Bar-2" >
                        <h3>{classs?.titulo}</h3>
                    </div>
                    <BodyPageNote title={"💻 Estado 💻"} >
                        <div className="ShapeNotebook-Static" >
                            <p>Tu Nota de curso:</p>
                            <h3 style={{textAlign: "center"}} >{State.totalCalificacion}%</h3>
                            <div className="ShapeNotebook-Static-bar" >
                                <h4>0%</h4>
                                <div className="ShapeNotebook-Static-bar-shape" >
                                    <div style={{background: `${State.totalCalificacion > 60 ? "var(--Main_Color)": "red"}`, width: `${State.totalCalificacion}%`}} />
                                </div>
                                <h4>100%</h4>
                            </div>
                            <h3 style={{textAlign: "center"}} >{State.totalCalificacion > 60 ? "¡Estas al dia!": "¡Ten cuidado!"}</h3>
                            <div style={{display: "flex", justifyContent: "space-between", paddingTop: "20px"}} >
                                <div>
                                    <h2 style={{textAlign: "center"}} >{State.totalExam-State.totalRespondidos}</h2>

                                    <p>Exámenes que debes</p>
                                </div>
                                <div>
                                    <h2 style={{textAlign: "center"}} >{State.totalRespondidos}</h2>
                                    <p>Exámenes hechos</p>
                                </div>
                            </div>
                            <div style={{marginTop: "10px",paddingTop: "10px",borderTop: "1px solid #4e4e4e"}} >
                                <h3>Exámenes pendientes</h3>
                            </div>
                            <div className="ShapeNotebook-List-NotAnswer" >
                                {
                                    NotQuiz.length > 0 ?
                                    NotQuiz.map((item, index)=>(
                                        <p key={index} >{index+1}. {item}</p>
                                    ))
                                    : <p style={{color: "GrayText", textAlign: "center"}}>No hay exámenes pendientes</p>
                                }
                            </div>
                        </div>
                    </BodyPageNote>
                    <div className="ShapeNotebook-Bar-Botom" >
                        <div>
                            <h2 title="Exámenes" onClick={()=> navigate("/class/student/home")} ><FaClipboardList /></h2>
                            <h2 title="Calificaciones" onClick={()=> navigate("/class/student/qualification")} ><FaCheckDouble /></h2>
                            <h2 title="Estado" style={{color: "var(--Main_Color)"}} > <FaRegAddressCard /></h2>
                            <h2 title="¿Abandonar?" onClick={()=> navigate("/class/student/leave")} ><FaRegTrashCan /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShapeNotebookP;