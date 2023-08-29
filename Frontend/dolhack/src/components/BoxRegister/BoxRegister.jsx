import React,{useState, useRef} from "react";
import "./BoxRegister.css";

function BoxRegister(){
    const [img,setImg] = useState("https://cdn.discordapp.com/attachments/466035511451189268/1144101471844044960/Vana_-_Future_Gamer_2023-08-23-4_19_49PM_0.png");
    const imgFile = useRef(null);
    return(
        <div className="BoxRegister-Render">
            <div className="BoxRegister-Div" >
                <p>Modifica tu perfil</p>
                <div className="BoxRegister-IMG">
                   <img src={img} loading="lazy" />
                </div>
                <input className="InputFile-Register" type="file" ref={imgFile} onChange={(e) => setImg(URL.createObjectURL(e.target.files[0])) } />
                <button className="BTNfile-Register" onClick={() => imgFile.current.click()} style={{backgroundColor: "#fff", color: "#000"}} >Subir foto</button>
                <textarea name="" id="" placeholder="Biografía"></textarea>
                <div className="BoxRengister-RolDiv" >
                    <div>
                        <label>Estudiante</label>
                        <input type="radio" name="rol" id="" />
                    </div>
                    <div>
                        <input type="radio" name="rol" id="" />
                        <label>Profesor</label>
                    </div>
                </div>
                <button>Modificar</button>
            </div>
        </div>
    );
}

export default BoxRegister;