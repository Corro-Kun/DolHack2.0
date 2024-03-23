package com.backend.dolhack.models.user;

public class newUserModel {
    private String nombre;
    private String correo;
    private String contraseña;
    private int rol;

    public newUserModel(){

    }

    public newUserModel(String nombre, String correo, String contraseña, int rol) {
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.rol = rol;
    }

    public String getNombre(){
        return nombre;
    }

    public String getCorreo(){
        return correo;
    }

    public String getContraseña(){
        return contraseña;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public void setCorreo(String correo){
        this.correo = correo;
    }

    public void setContraseña(String contraseña){
        this.contraseña = contraseña;
    }

    public int getRol(){
        return rol;
    }

    public void setRol(int rol){
        this.rol = rol;
    }
}
