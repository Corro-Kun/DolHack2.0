import React,{useState, useRef} from "react";
import "./BoxRegister.css";
import { useAuth } from "../../context/auth";
import { toast } from "sonner";

function BoxRegister(){
    const {changerComplet, complet} = useAuth();
    const [img,setImg] = useState("https://cdn.discordapp.com/attachments/466035511451189268/1155337418208182383/cartoon-character-with-hoodie-that-says-i-m-boy_784625-10887.png");
    const imgFile = useRef(null);
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