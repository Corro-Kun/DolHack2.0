import React from "react";
import "./UpdateUser.css";
import { useProfile } from "../../context/profile";
import {GiReturnArrow} from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function UpdateUser() {
    const navigate = useNavigate();

    const {DataProfile} = useProfile();

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
                        <div className="n">
                            <input 
                            type="text" 
                            required
                            value={DataProfile.nombre}
                            />
                            <label>Nombre</label>
                        </div>
                        <div>
                            <input type="text"
                            required
                            value={DataProfile.apellido}
                            />
                            <label>Apellido</label>
                        </div>
                        <div>
                            <input 
                            type="text" 
                            required
                            />
                            <label>Telefono</label>
                        </div>
                        <div>
                            <textarea 
                            name="" 
                            placeholder="Biografia"
                            value={DataProfile.biografia}
                            ></textarea>
                        </div>
                    </div>
                    <div className="UpdateUser-Img" >
                        <div>
                            <img src={DataProfile.foto} />
                        </div>
                    </div>
                </div>
                <div className="UpdateUser-Banner-Div" >
                    <div>
                        <img src={DataProfile.banner} />
                    </div>
                </div>
                <div>
                    <button type="submit">Actulizar</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateUser;