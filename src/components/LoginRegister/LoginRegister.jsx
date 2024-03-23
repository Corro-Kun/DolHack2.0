import React,{useEffect, useState} from "react";
import { useAuth } from "../../context/auth";
import "./LoginRegister.css";
import { Toaster, toast } from "sonner";

function LoginRegister(){
    const {changerUserLogin, login, changerUserRegister, register} = useAuth();
    const [Termins, setTermins] = useState(true);
    useEffect(()=>{
        const RegisterBTN = document.querySelector('.Register-link')
        const LoginLayaut = document.querySelector('.Login-Home')
        const HomeLR = document.querySelector('.Login-Register-DolHack')
        const LoginBTN = document.querySelector('.Login-link')

        RegisterBTN.addEventListener('click', ()=> {
            LoginLayaut.classList.add('login')
            HomeLR.classList.add('active')
        })
        LoginBTN.addEventListener('click', ()=> {
            LoginLayaut.classList.remove('login')
            HomeLR.classList.remove('active') 
        })
        document.title = "login";
        return () => {
            RegisterBTN.addEventListener('click', ()=> {
                LoginLayaut.classList.add('login')
                HomeLR.classList.add('active')
            })
            LoginBTN.addEventListener('click', ()=> {
                LoginLayaut.classList.remove('login')
                HomeLR.classList.remove('active') 
            })
            document.title = "DolHack";
        }
    },[])

    return(
        <div className="BodyLogin" >
            <div className="Login-Register-DolHack">
                <div className="Login-Home">
                    <h2>Iniciar sesión</h2>
                    <form onSubmit={(e) => toast.promise(login(e),{
                        loading: "Iniciando sesión...",
                        success: "Bienvenido",
                        error: (err) => err.response.data.message == "contraseña incorrecta"? "Contraseña incorrecta" : "Usuario no encontrado"
                    })} >
                        <div className="Input-box">
                            <input 
                            type="text" 
                            required
                            name="correo" 
                            onChange={(e)=> changerUserLogin(e)} />
                            <label>Correo</label>
                        </div>
                        <div className="Input-box">
                            <input 
                            type="password" 
                            required
                            name="contraseña"
                            onChange={(e)=> changerUserLogin(e)} />
                            <label>Contraseña</label>
                        </div>
                        <div className="Forget-Password">
                            <label><input type="checkbox"/> ¿Recordarme?</label>
                            { /*<a href="#">¿olvidaste la contraseña?</a> */}
                        </div>
                        <button type="submit" className="BTN-Login">Ingresar</button>
                        <div className="Login-Register">
                            <p>¿no tengo una cuenta?  <a style={{cursor:"pointer"}} className="Register-link"> Registrar</a></p>
                        </div>
                    </form>
                </div>

                <div className="Login-Home register">
                    <h2>Registrar</h2>
                    <form onSubmit={(e) => toast.promise(register(e),{
                        loading: "Registrando...",
                        success: "Registrado con exito",
                        error: (err) => "" +err.response.data.message
                    })}>
                        <div className="Input-box">
                            <input 
                            type="text" 
                            required
                            name="nombre"
                            onChange={(e)=> changerUserRegister(e)}
                            />
                            <label>Nombre de usuario</label>
                        </div>
                        <div className="Input-box">
                            <input 
                            type="text" 
                            required
                            name="correo"
                            onChange={(e)=> changerUserRegister(e)}
                            />
                            <label>Correo</label>
                        </div>
                        <div className="Input-box">
                            <input 
                            type="password" 
                            required
                            name="contraseña"
                            onChange={(e)=> changerUserRegister(e)}
                            />
                            <label>Contraseña</label>
                        </div>
                        <div className="Input-Rol-Div" >
                            <div>
                                <input 
                                type="radio" 
                                name="rol" 
                                value={1} 
                                onChange={(e)=> changerUserRegister(e)}
                                required />
                                <label>Profesor</label>
                            </div>
                            <div>
                                <label>Estudiante</label>
                                <input 
                                type="radio" 
                                name="rol" 
                                value={2} 
                                onChange={(e)=> changerUserRegister(e)}
                                required/>
                            </div>
                        </div>
                        <div className="Forget-Password">
                            <label><input type="checkbox" required onClick={() =>{
                                setTermins(!Termins)
                                if (Termins){
                                    toast("Gracias por Aceptar los terminos")
                                }
                                }} /> ¿Aceptas los términos y condiciones?</label>
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