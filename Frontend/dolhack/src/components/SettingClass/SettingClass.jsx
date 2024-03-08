import {useEffect} from "react";
import { toast } from "sonner";
import "./SettingClass.css"
import {useClassTeacher} from "../../context/ClassTeacher";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

function SettingClass(){
    const {getData, dataClass, changerDataClass, handleSubmitDataClass, DeleteClassT, state, GetStateClass, ChangerStateClass} = useClassTeacher();

    useEffect(()=>{
        getData();
        GetStateClass();
    },[]);

    return(
        <div className="SettingClass-div-render" >
            <form onSubmit={(e)=> toast.promise(handleSubmitDataClass(e),{
                loading:"Actualizando...",
                success:"Actualizado",
                error:"Error al actualizar"
            }) }>
                <div className="SettingClass-title" >
                    <h2>Actualiza Tus Datos</h2><h2 title={state.estado_clase === 1? "La Clase esta disponible": "La clase cerro"} className="SettingClass-h2" style={{color: state.estado_clase === 1? "var(--Main_Color)": "red"}} >{state.estado_clase ===1 ? <FaHeart />: <FaHeartBroken />}</h2>
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
                    <select name="type" required onChange={(e)=> changerDataClass(e) }>
                        <option value="Programación" selected={dataClass.nombretipo === "Programación"? true : false} >Programación</option>
                        <option value="Lenguas" selected={dataClass.nombretipo === "Lenguas"? true : false} >Lenguas</option>
                    </select>
                </div>
                <div className="BoxCreateClass-Select-div" >
                    <label>Nivel de la clase</label>
                    <select name="level" required onChange={(e)=> changerDataClass(e) } >
                        <option value="Principiante" selected={dataClass.nombrenivel === "Principiante"? true: false} >Principiante</option>
                        <option value="Intermedio" selected={dataClass.nombrenivel === "Intermedio"? true: false} >Intermedio</option>
                        <option value="Avanzado" selected={dataClass.nombrenivel === "Avanzado"? true: false} >Avanzado</option>
                    </select>
                </div>
                <div className="SettingClass-Buttons" >
                    <button type="submit" >Actualizar</button>
                    <button type="button" onClick={()=> toast("¿Quieres Cambiar de estado tu clase?",{
                        action:{
                            label:"Si",
                            onClick:()=> toast.promise(ChangerStateClass(),{
                                loading: "Cambiando...",
                                success: "Cambiado",
                                error: (e) => e.response.data.message+""
                            })
                        }, cancel:{label:"No"},
                    })} >Cambiar estado</button>
                    <button type="button" onClick={()=> toast("¿Esta seguro de borrar tu clase?",{action:{
                        label:"Si",
                        onClick:()=>toast.promise(DeleteClassT(),{
                            loading:"Eliminando...",
                            success:"Clase eliminada",
                            error: (e) => e.response.data.message+""
                        }) //()=> DeleteClassT(),
                    }, cancel:{label:"No"},
                    }) } >Eliminar</button>
                </div>
            </form>
        </div>
    );
}

export default SettingClass;