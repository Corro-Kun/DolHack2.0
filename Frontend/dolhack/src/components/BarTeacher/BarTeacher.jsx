import "./BarTeacher.css";
import {BsFillFileEarmarkPostFill} from "react-icons/bs";
import {FaClipboardList} from "react-icons/fa";
import {PiExamBold} from "react-icons/pi";
import {GiStabbedNote} from "react-icons/gi";
import {AiFillSetting} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

function BarTeacher({setting, home}){
    const navigate = useNavigate();
    return(
        <div className="BarTeacher-Div-Render" >
            <div className="BarTeacher-Main" >
                <h2>Tu Clase</h2>
            </div>
            <div className="BarTeacher-List" >
                <ul id={home? "BarTeacher-List-Active" : null} onClick={()=> navigate("/class/teacher/home")} >
                    <div>
                        <samp><BsFillFileEarmarkPostFill /></samp>  
                        <p>Publicar</p>
                    </div>
                </ul>
                <ul>
                    <div>
                        <samp><FaClipboardList /></samp>  
                        <p>Lista</p>
                    </div>
                </ul>
                <ul>
                    <div>
                        <samp><PiExamBold /></samp>
                        <p> Exámenes</p>
                    </div>
                </ul>
                <ul>
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