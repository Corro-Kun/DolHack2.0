import { toast } from "sonner";
import "./SettingClass.css"

function SettingClass(){
    return(
        <div className="SettingClass-div-render" >
            <form action="">
                <div className="SettingClass-title" >
                    <h2>Nombre de la clase</h2>
                </div>
                <div className="BoxCreateClass-input-Div-1" >
                    <label>Titulo</label>
                    <input 
                    type="text" 
                    required
                    name="title"
                    />
                </div>
                <div className="BoxCreateClass-input-Div-2" >
                    <textarea 
                    name="description" 
                    placeholder="Descripción"
                    required
                    />
                </div>
                <div className="BoxCreateClass-render-div" >
                    <label>Fecha de inicio</label>
                    <input type="date" name="start_date" required />
                </div>
                <div className="BoxCreateClass-render-div">
                    <label>Fecha de finalización</label>
                    <input type="date" name="end_date" required />
                </div>
                <div className="BoxCreateClass-Select-div" >
                    <label>Tipo de clase</label>
                    <select name="type" required >
                        <option value="Programación">Programación</option>
                        <option value="Lenguas">Lenguas</option>
                    </select>
                </div>
                <div className="BoxCreateClass-Select-div" >
                    <label>Nivel de la clase</label>
                    <select name="level" required onChange={(e)=> changerClassData(e)} >
                        <option value="Principiante">Principiante</option>
                        <option value="Intermedio">Intermedio</option>
                        <option value="Avanzado">Avanzado</option>
                    </select>
                </div>
                <div className="SettingClass-Buttons" >
                    <button type="submit" >Actualizar</button>
                    <button type="button" onClick={()=> toast("¿Esta seguro de borrar tu clase?",{action:{
                        label:"Si",
                        onClick:()=> toast("Clase eliminada"),
                    }}) } >Eliminar</button>
                </div>
            </form>
        </div>
    );
}

export default SettingClass;