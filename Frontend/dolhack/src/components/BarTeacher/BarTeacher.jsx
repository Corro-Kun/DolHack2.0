import "./BarTeacher.css";
import Cookies from "js-cookie";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaClipboardList} from "react-icons/fa";
import {PiExamBold} from "react-icons/pi";
import {GiStabbedNote} from "react-icons/gi";
import {AiFillSetting} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"

function BarTeacher({setting, home, list, exam, quilification}){
    const navigate = useNavigate();
    return(
        <div className="BarTeacher-Div-Render" >
            <div className="BarTeacher-Main" >
                <div>
                    <samp onClick={()=> {
                        Cookies.remove("class");
                        navigate("/home");
                    }} ><BiArrowBack/></samp>
                    <h2>Tus Clase</h2>
                </div>
           </div>
            <div className="BarTeacher-List" >
                <ul id={home? "BarTeacher-List-Active" : null} onClick={()=> navigate("/class/teacher/home")} >
                    <div>
                        <samp><BsFillFileEarmarkPostFill /></samp>  
                        <p>Publicar</p>
                    </div>
                </ul>
                <ul id={list? "BarTeacher-List-Active" : null } onClick={()=> navigate("/class/teacher/list")} >
                    <div>
                        <samp><FaClipboardList /></samp>  
                        <p>Lista</p>
                    </div>
                </ul>
                <ul id={exam? "BarTeacher-List-Active" : null} onClick={()=> navigate("/class/teacher/exam")} >
                    <div>
                        <samp><PiExamBold /></samp>
                        <p> Exámenes</p>
                    </div>
                </ul>
                <ul id={quilification? "BarTeacher-List-Active" : null} onClick={()=> navigate("/class/teacher/qualification")} >
                    <div>
                        <samp><GiStabbedNote /></samp>
                        <p> Calificaciones</p>
                    </div>
                </ul>
                <ul id={setting? "BarTeacher-List-Active" : null} onClick={()=> navigate("/class/teacher/setting")} >
                    <div>
                        <samp><AiFillSetting /></samp>
                        <p> Configuraciones</p>                        
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default BarTeacher;