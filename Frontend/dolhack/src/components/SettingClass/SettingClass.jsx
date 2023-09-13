import {useEffect} from "react";
import { toast } from "sonner";
import "./SettingClass.css"
import {useClassTeacher} from "../../context/ClassTeacher";

function SettingClass(){
    const {getData, dataClass, changerDataClass, handleSubmitDataClass, DeleteClassT} = useClassTeacher();

    useEffect(()=>{
        getData();
    },[]);

    return(
        <div className="SettingClass-div-render" >
            <form onSubmit={(e)=> toast.promise(handleSubmitDataClass(e),{
                loading:"Actualizando...",
                success:"Actualizado",
                error:"Error al actualizar"
            }) }>
                <div className="SettingClass-title" >
                    <h2>Actualiza Tus Datos</h2>
                </div>
                <div className="BoxCreateClass-input-Div-1" >
                    <label>Titulo</label>
                    <input 
                    type="text" 
                    required
                    name="titulo"
                    value={dataClass.titulo}
                    onChange={(e)=> changerDataClass(e)}
                    />
                </div>
                <div className="BoxCreateClass-input-Div-2" >
                    <textarea 
                    name="descripcion" 
                    placeholder="Descripción"
                    required
                    value={dataClass.descripcion}
                    onChange={(e)=> changerDataClass(e)}
                    />
                </div>
                <div className="BoxCreateClass-render-div" >
                    <label>Fecha de inicio</label>
                    <input type="date" name="fecha_inicio" 
                    required
                    value={dataClass.fecha_inicio} 
                    onChange={(e)=> changerDataClass(e)}
                    />
                </div>
                <div className="BoxCreateClass-render-div">
                    <label>Fecha de finalización</label>
                    <input 
                    type="date" 
                    name="fecha_finalizacion" 
                    required 
                    value={dataClass.fecha_finalizacion}
                    onChange={(e)=> changerDataClass(e)}
                    />
                </div>
                <div className="BoxCreateClass-Select-div" >
                    <label>Tipo de clase</label>
                    <select name="type" required onChange={(e)=> changerDataClass(e) } >
                        <option value="Programación">Programación</option>
                        <option value="Lenguas">Lenguas</option>
                    </select>
                </div>
                <div className="BoxCreateClass-Select-div" >
                    <label>Nivel de la clase</label>
                    <select name="level" required onChange={(e)=> changerDataClass(e) } >
                        <option value="Principiante">Principiante</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                    </select>
                </div>
                <div className="SettingClass-Buttons" >
                    <button type="submit" >Actualizar</button>
                    <button type="button" onClick={()=> toast("¿Esta seguro de borrar tu clase?",{action:{
                        label:"Si",
                        onClick:()=> DeleteClassT(),
                    }}) } >Eliminar</button>
                </div>
            </form>
        </div>
    );
}

export default SettingClass;