package com.backend.dolhack.models.user;

public class loginUserModel {
    private String correo;
    private String contraseña;

    public loginUserModel(){

    }

    public loginUserModel(String correo, String contraseña){
        this.correo = correo;
        this.contraseña = contraseña;
    }

    public String getCorreo(){
        return this.correo;
    }

    public String getContraseña(){
        return this.contraseña;
    }

    public void setCorreo(String correo){
        this.correo = correo;
    }

    public void setContraseña(String contraseña){
        this.contraseña = contraseña;
    }
}
