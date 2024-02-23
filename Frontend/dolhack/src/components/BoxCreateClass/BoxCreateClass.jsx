import React,{useEffect, useRef, useState} from "react";
import "./BoxCreateClass.css";
import { useClass } from "../../context/class";
import { toast } from "sonner";

function BoxCreateClass(){
    const {classData, changerClassData, handleClassData} = useClass();
    const fileInput = useRef(null);
    const [file, setFile] = useState(null);
    useEffect(()=>{
        document.title = "Crear clase";
        return () => document.title = "DolHack";
    },[])
    return(
        <div className="BoxCreateClass-Main-Body" >
            <div className="BoxCreateClass-Main-Div">
                <form onSubmit={(e) => handleClassData(e)} >              
                    <div className="BoxCreateClass-Div-Sesion">
                        <div className="BoxCreateClass-input-Div-1" >
                            <label>Titulo</label>
                            <input 
                            type="text" 
                            required
                            name="title"
                            onChange={(e)=>changerClassData(e)} />
                        </div>
                        <div className="BoxCreateClass-input-Div-2" >
                            <textarea 
                            name="description" 
                            placeholder="Descripción"
                            required
                            onChange={(e)=>changerClassData(e)} />
                        </div>
                        <div className="BoxCreateClass-render-div" >
                            <label>Fecha de inicio</label>
                            <input type="date" name="start_date" required onChange={(e)=> changerClassData(e)} />
                        </div>
                        <div className="BoxCreateClass-render-div">
                            <label>Fecha de finalización</label>
                            <input type="date" name="end_date" required onChange={(e)=> changerClassData(e)} />
                        </div>
                        <div className="BoxCreateClass-Select-div" >
                            <label>Tipo de clase</label>
                            <select name="type" required onChange={(e)=> changerClassData(e)}>
                                <option value="">Elige una opción...</option>
                                <option value="Programación">Programación</option>
                                <option value="Lenguas">Lenguas</option>
                            </select>
                        </div>
                        <div className="BoxCreateClass-Select-div" >
                            <label>Nivel de la clase</label>
                            <select name="level" required onChange={(e)=> changerClassData(e)} >
                                <option value="">Elige una opción...</option>
                                <option value="Principiante">Principiante</option>
                                <option value="Intermedio">Intermedio</option>
                                <option value="Avanzado">Avanzado</option>
                            </select>
                        </div>
                        <div className="BoxCreateClass-img" >
                            <label>Imagen de la clase (recomendado imágenes 200 x 200 superior)</label>
                            <div onClick={()=> fileInput.current.click()} className="BoxCreateClass-img-div" >
                                 <input style={{display:"none"}}  type="file" name="file" required ref={fileInput} onChange={(e)=>{
                                    if (e.target.files[0].name.endsWith(".png") || e.target.files[0].name.endsWith(".jpg") || e.target.files[0].name.endsWith(".jpeg") || e.target.files[0].name.endsWith(".gif") || e.target.files[0].name.endsWith(".webp")){
                                        setFile(URL.createObjectURL(e.target.files[0]));
                                        changerClassData(e);
                                    }else{
                                        toast.error("El tipo de archivo no es valido");
                                        fileInput.current.value = "";
                                    }
                                }}/>
                                <img src={"https://cdn.discordapp.com/attachments/466035511451189268/1155316556738338866/editar_foto.png"}/>
                            </div>
                        </div>
                    </div>
                    <div className="BoxCreateClass-Div-Sesion" >
                        <div>
                            <h2>Vista previa</h2>
                        </div>
                        <div className="BoxCreateClass-Previa" >
                            <h3>{classData.title? classData.title : "Titulo"}</h3>
                            <div>
                                <p>{classData.description? classData.description : "Descripción"}</p>
                            </div>
                            <div>
                                <img src={file} alt="" />
                            </div>
                            <div>
                                <p>{classData.type? classData.type : "Tipo"}</p>
                                <p>{classData.level? classData.level : "Nivel"}</p>
                            </div>
                        </div>
                    </div>
                    <div className="BoxCreateClass-btn" >
                        <button type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BoxCreateClass;