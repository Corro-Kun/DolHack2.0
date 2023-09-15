import React,{useRef, useState, useEffect} from "react";
import {toast} from "sonner";
import "./PostTeacher.css";
import { useClassTeacher } from "../../context/ClassTeacher";

function PostTeacher(){
    const inputFile = useRef(null);
    const [buton, setButon] = useState("Sube una foto");
    const {changerPost, HandlePost, consultPost, post} = useClassTeacher();
    useEffect(()=>{
        consultPost();
    },[]);
    return(
        <div className="PostTeacher-Div-Render" >
            <div className="PostTeacher-Main" >
                <div className="PostTeacher-Post" >
                    <textarea name="post" placeholder="Tu publicación..." onChange={(e)=> changerPost(e) } />
                    <div>
                        <input style={{display: "none"}} type="file" name="file" ref={inputFile} onChange={(e)=> {
                            changerPost(e);
                            setButon("Foto cargada");
                            toast.success("Foto cargada correctamente");
                        }} />
                        <button onClick={()=> inputFile.current.click() } >{buton}</button>
                        <button style={{backgroundColor: "var(--Main_Color)", color: "var(--Text_Color)"}} onClick={()=> toast.promise(HandlePost(),{
                            loading: "Publicando...",
                            success: "Publicado",
                            error: "Error al publicar"
                        })} >Publicar</button>
                    </div>
               </div>
                <div className="PostTeacher-Post-Div" >
                    {
                        post.map((data, i)=>(
                            <div key={i} className="PostTeacher-Div-Post-One" >
                                <div className="PostTeacher-Data" >
                                    <div>
                                        <img src={data.foto} alt="" loading="lazy" />
                                    </div>
                                    <h3>{data.nombre} {data.apellido}</h3>
                                </div>
                                <p style={{marginBottom: "4px"}} >{data.texto}</p>
                                <img src={data.imagen} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default PostTeacher;