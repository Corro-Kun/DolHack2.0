import WarningPoints from "../WarningPoints/WarningPoints";
import { useClassStudent } from "../../context/ClassStudent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "sonner";
import "./WarningClass.css";

function WarningClass() {
    const {leaveClass} = useClassStudent();
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);
  return (
    <div className="warning-class-render">
        <div className="warning-class-div">
            <div className="warning-class-text" >
                <div className="warning-class-title">
                    <h2>¿Estás seguro que quieres abandonar la clase?</h2>
                </div>
                <WarningPoints number={1} title={"Eliminación de Nombre de la Lista de Estudiantes:"} description={"En caso de que decidas abandonar esta clase, tu nombre será eliminado de la lista oficial de estudiantes registrados. Esto significa que perderás todos los derechos y privilegios asociados con tu estatus como estudiante en esta clase."} />
                <WarningPoints number={2} title={"Eliminación de Notas y Calificaciones:"} description={"En caso de que decidas abandonar esta clase, todas las notas y calificaciones que hayas obtenido hasta el momento serán eliminadas. Esto significa que perderás todo el progreso que hayas hecho en esta clase."} />
                <div className="warning-class-check">
                    <input type="checkbox" onChange={()=> setAccept(!accept)} />
                    <p>¿Aceptas estas condiciones?</p>
                </div>
           </div>
            <div className="warning-class-buttons">
                <button style={{marginRight: "100px", backgroundColor: "red"}} onClick={()=> navigate("/class/student/home")} >Cancelar</button>
                <button style={{backgroundColor: "var(--Main_Color)"}} onClick={()=>{
                    if(!accept){
                        toast.error("Debes aceptar las condiciones para continuar");
                        return
                    }else{
                        toast.promise(leaveClass(), {
                            loading: "Abandonando la clase...",
                            success: "Has abandonado la clase",
                            error: "Error al abandonar la clase"
                        });
                    }
                }} >Aceptar</button>
            </div>
        </div>
    </div>
  );
}

export default WarningClass;