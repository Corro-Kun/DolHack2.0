import { useEffect } from "react";
import "./ListQuialification.css";
import { useClassTeacher } from "../../context/ClassTeacher";
import { TbArrowsExchange } from "react-icons/tb";

function ListQuialification(){
    const {ListQualification,Listqualification, downloadQualification, GetStateClass, state, ChangerStateNotes} = useClassTeacher();
    useEffect(()=>{
        ListQualification();
        GetStateClass();
    },[]);
    return(
        <div className="ListStudent-Div-Render" >
            <div className="ListStudent-Main-Div" >
                <div className="ListStudent-Title Calification" >
                    <h2 title="Estado de las notas" style={{color: state.estado_calificacion === 1? "var(--Main_Color)": "red"}} >{state.estado_calificacion === 1? "Abierto": "Cerrado" }</h2>
                    <h2>Calificación de estudiantes</h2>
                    <h2 title="Cambiar estado" onClick={()=> ChangerStateNotes()} style={{transform: "translateY(2px);", cursor: "pointer", marginRight: "15px"}} ><TbArrowsExchange /></h2>
                </div>
                <div className="ListStudent-Contenet" >
                    {
                        Listqualification.map((item, index)=>(
                            <div key={index} className="ListStudent-Student" >
                                <div className="ListStudent-Data" >
                                    <div>
                                        <img src={item.foto} alt="" />
                                    </div>
                                    <h3>{item.nombre} {item.apellido}</h3>
                                </div>
                                <p style={{marginRight: "50px"}} >{item.titulo}</p>
                                <h3>{item.respuestas}/{item.preguntas} = {Math.floor(item.calificacion)}%</h3>
                            </div>
 
                        ))
                    }
               </div>
                <div className="ListStudent-Button" >
                    <button title="¿Descargar Excel?" onClick={()=> downloadQualification()} >Descargar</button>
                </div>
            </div>
        </div>
    );
}

export default ListQuialification;