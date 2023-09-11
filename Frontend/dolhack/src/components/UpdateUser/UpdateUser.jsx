import React,{useRef} from "react";
import "./UpdateUser.css";
import { useProfile } from "../../context/profile";
import {GiReturnArrow} from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function UpdateUser() {
    const navigate = useNavigate();
    const inputFoto = useRef(null);
    const inputBanner = useRef(null);
    const {DataUpdate, changeDataUpdate, Fotos, setFotos, handleUpdate} = useProfile();

    return(
        <div className="UpdateUser-Render">
            <div className="UpdateUser-Main-Div">
                <div className="UpdateUser-Text-div" >
                    <samp onClick={()=> navigate("/home") } ><GiReturnArrow /></samp>
                    <h2>Actualiza tus datos</h2>
                    <p>...</p>
                </div>
                <div className="UpdateUser-Folder-div" >
                    <div className="UpdateUser-Input" >
                        <div>
                            <input 
                            type="text" 
                            name="nombre"
                            required
                            value={DataUpdate?.nombre=== undefined ? "" : DataUpdate?.nombre}
                            onChange={changeDataUpdate}
                            />
                            <label>Nombre</label>
                        </div>
                        <div>
                            <input type="text"
                            required
                            value={DataUpdate?.apellido=== undefined ? "" : DataUpdate?.apellido}
                            name="apellido"
                            onChange={changeDataUpdate}
                            />
                            <label>Apellido</label>
                        </div>
                        <div>
                            <input 
                            type="text" 
                            required
                            name="telefono"
                            value={DataUpdate?.telefono=== undefined ? "" : DataUpdate?.telefono}
                            onChange={changeDataUpdate}
                            />
                            <label>Telefono</label>
                        </div>
                        <div>
                            <textarea 
                            name="biografia" 
                            placeholder="Biografia"
                            value={DataUpdate?.biografia=== undefined ? "" : DataUpdate?.biografia}
                            onChange={changeDataUpdate}
                            ></textarea>
                        </div>
                    </div>
                    <div className="UpdateUser-Img" >
                        <div>
                            <img src={Fotos.foto} onClick={() => inputFoto.current.click()} />
                            <input style={{display: "none"}} type="file" name="foto" ref={inputFoto} onChange={(e)=>{
                                setFotos({...Fotos, foto: URL.createObjectURL(e.target.files[0])});
                                changeDataUpdate(e);
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="UpdateUser-Banner-Div" >
                    <div onClick={()=> inputBanner.current.click()} >
                        <img src={Fotos.banner} />
                        <input style={{display: "none"}} type="file" name="banner" ref={inputBanner} onChange={(e) =>{
                            setFotos({...Fotos, banner: URL.createObjectURL(e.target.files[0])});
                            changeDataUpdate(e);
                        }} />
                    </div>
                </div>
                <div>
                    <button onClick={() => {
                        toast.promise(handleUpdate(),{
                            loading: "Actualizando...",
                            success: "Actualizado",
                            error: (err) => err,
                        })
                    }} >Actulizar</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;