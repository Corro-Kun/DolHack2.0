package com.backend.dolhack.models.user;

public class newUserModel {
    private String nombre;
    private String correo;
    private String contrasena;
    private int rol;

    public newUserModel(){

    }

    public newUserModel(String nombre, String correo, String contrasena, int rol) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.rol = rol;
    }

    public String getNombre(){
        return nombre;
    }

    public String getCorreo(){
        return correo;
    }

    public String getContrasena(){
        return contrasena;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public void setCorreo(String correo){
        this.correo = correo;
    }

    public void setContrasena(String contrasena){
        this.contrasena = contrasena;
    }

    public int getRol(){
        return rol;
    }

    public void setRol(int rol){
        this.rol = rol;
    }
}
