import React,{useRef, useState, useEffect} from "react";
import {toast} from "sonner";
import "./PostTeacher.css";
import { useClassTeacher } from "../../context/ClassTeacher";

function PostTeacher(){
    const inputFile = useRef(null);
    const text = useRef(null);
    const [buton, setButon] = useState("Sube una foto");
    const {changerPost, HandlePost, consultPost, post} = useClassTeacher();
    useEffect(()=>{
        consultPost();
    },[]);
    return(
        <div className="PostTeacher-Div-Render" >
            <div className="PostTeacher-Main" >
                <div className="PostTeacher-Post" >
                    <textarea name="post" placeholder="Tu publicación..." ref={text} onChange={(e)=> changerPost(e) } />
                    <div>
                        <input style={{display: "none"}} type="file" name="file" ref={inputFile} onChange={(e)=> {
                            if (e.target.files[0].name.endsWith(".png") || e.target.files[0].name.endsWith(".jpg") || e.target.files[0].name.endsWith(".jpeg") || e.target.files[0].name.endsWith(".gif") || e.target.files[0].name.endsWith(".webp")){
                                changerPost(e);
                                setButon("Foto cargada");
                                toast.success("Foto cargada correctamente");
                            }else{
                                toast.error("El archivo no es una imagen");
                                setButon("Sube una foto");
                            }
                        }} />
                        <button onClick={()=> inputFile.current.click() } >{buton}</button>
                        <button style={{backgroundColor: "var(--Main_Color)", color: "var(--Text_Color)"}} onClick={()=> {toast.promise(HandlePost(),{
                            loading: "Publicando...",
                            success: "Publicado",
                            error: (e) => e.response? e.response.data.message : e.message 
                        })
                        text.current.value = "";
                        inputFile.current.value = "";
                        setButon("Sube una foto");
                        }} >Publicar</button>
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
                                {
                                    data.imagen ? 
                                    <div className="PostTeacher-Render-Div-Img" >
                                        <div className="PostTeacher-Div-Img" >
                                            <img src={data.imagen} alt="" />
                                        </div>
                                    </div>
                                    : null
                                }
                           </div>

                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default PostTeacher;