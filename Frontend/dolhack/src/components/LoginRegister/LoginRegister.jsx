import React from "react";
import "./LoginRegister.css";

function LoginRegister(){
    return(
        <div className="BodyLogin" >
            <div className="Login-Register-DolHack">
                <div className="Login-Home">
                    <h2>Iniciar sesión</h2>
                    <form>
                        <div className="Input-box">
                            <input type="text" required />
                            <label>Correo</label>
                        </div>
                        <div className="Input-box">
                            <input type="password" required />
                            <label>Contraseña</label>
                        </div>
                        <div className="Forget-Password">
                            <label><input type="checkbox"/> ¿Recordarme?</label>
                            <a href="#">¿olvidaste la contraseña?</a>
                        </div>
                        <button type="submit" className="BTN-Login">Ingresar</button>
                        <div className="Login-Register">
                            <p>¿no tengo una cuenta?  <a style={{cursor:"pointer"}} className="Register-link"> Registrar</a></p>
                        </div>
                    </form>
                </div>

                <div className="Login-Home register">
                    <h2>Registrar</h2>
                    <form>
                        <div className="Input-box">
                            <input type="text" required/>
                            <label>Nombre de usuario</label>
                        </div>
                        <div className="Input-box">
                            <input type="text" required/>
                            <label>Correo</label>
                        </div>
                        <div className="Input-box">
                            <input type="password" required/>
                            <label>Contraseña</label>
                        </div>
                        <div className="Forget-Password">
                            <label><input type="checkbox"/> ¿Aceptas los términos y condiciones?</label>
                        </div>
                        <button type="submit" className="BTN-Login" >Registrar</button>
                        <div className="Login-Register">
                            <p>¿no tengo una cuenta?  <a style={{cursor:"pointer"}} className="Login-link">Iniciar sesión</a></p>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    );
}

export default LoginRegister