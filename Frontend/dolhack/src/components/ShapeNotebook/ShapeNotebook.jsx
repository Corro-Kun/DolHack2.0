import BodyPageNote from "../BodyPageNote/BodyPageNote";
import BodyPublication from "../BodyPublication/BodyPublication";
import List from "../List/List";
import Publication from "../Publication/Publication";
import Cookies from "js-cookie";
import "./ShapeNotebook.css";
import { useNavigate } from "react-router-dom";
import { FaArrowsRotate, FaXmark, FaClipboardList, FaCheckDouble, FaRegAddressCard, FaRegTrashCan} from "react-icons/fa6";
import { useClassStudent } from "../../context/ClassStudent";
import { useEffect } from "react";
import { useExam } from "../../context/exam";

function ShapeNotebook(){
    const navigate = useNavigate();
    const {consultPost, Post, nameClasss, classs} = useClassStudent();
    const {GetQuizs, Quizs} = useExam();
    
    useEffect(()=>{
        consultPost();
        GetQuizs();
        nameClasss();
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
                    <BodyPageNote title={"📝 Exámenes 📝"} >
                        {
                            Quizs.length > 0 ? 
                            Quizs.map((item, index)=>(
                                <List key={index} title={item.titulo} data={index+1} id={item.idquiz} description={item.descripcion} pass={true} />
                            ))
                            : <p style={{color: "GrayText"}}>Aun no tienes exámenes</p> 
                        }
                    </BodyPageNote>
                    <div className="ShapeNotebook-Bar-Botom" >
                        <div>
                            <h2 title="Exámenes" style={{color: "var(--Main_Color)"}} ><FaClipboardList /></h2>
                            <h2 title="Calificaciones" onClick={()=> navigate("/class/student/qualification")} ><FaCheckDouble /></h2>
                            <h2 title="Estado"> <FaRegAddressCard /></h2>
                            <h2 title="¿Abandonar?" ><FaRegTrashCan /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShapeNotebook;