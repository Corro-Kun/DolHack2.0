import React,{useState, useRef, useEffect} from "react";
import "./BoxRegister.css";
import { useAuth } from "../../context/auth";
import { toast } from "sonner";

function BoxRegister(){
    const {changerComplet, complet} = useAuth();
    const [img,setImg] = useState("https://cdn.discordapp.com/attachments/1005592732166795287/1219786917151772762/Alan_Turing_in_watercolour.png?ex=660c9217&is=65fa1d17&hm=24207c3d819a4d803c09552b16790814ae3f37b3a8624229e48c8dedff4ac1c0&");
    const imgFile = useRef(null);
    useEffect(()=>{
        document.title = "Completar perfil";

        return () => document.title = "DolHack";
    },[])
    return(
        <div className="BoxRegister-Render">
            <div className="BoxRegister-Div" >
                <p>Modifica tu perfil</p>
                <div className="BoxRegister-IMG" onClick={()=> toast("cambia tu foto de perfil")} >
                   <img src={img} loading="lazy" />
                </div>
                <input className="InputFile-Register" name="image" type="file" ref={imgFile} onChange={(e) => {
                    setImg(URL.createObjectURL(e.target.files[0]))
                    changerComplet(e);
                    } } />
                <button className="BTNfile-Register" onClick={() => imgFile.current.click()} style={{backgroundColor: "#fff", color: "#000"}} >Subir foto</button>
                <textarea name="biografia" placeholder="Biografía" onChange={(e) => changerComplet(e)} onClick={() => toast("Escribe una biografia a tu perfil")} ></textarea>
                <button onClick={() => toast.promise(complet(),{
                    loading: "Completando perfil...",
                    success: "Bienvenido",
                    error: "Error al completar perfil"
                })} >Modificar</button>
            </div>
        </div>
    );
}

export default BoxRegister;