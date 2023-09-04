package com.backend.dolhack.models.home;

public class userListModel {
    private String idusuario;
    private String nombre;
    private String apellido;
    private String biografia;
    private String foto;
    private String correo;
    private String banner;
    private String rol;

    public userListModel(){

    }

    public userListModel(String nombre, String apellido, String biografia, String foto, String banner, String rol, String correo, String idusuario){
        this.nombre = nombre;
        this.apellido = apellido;
        this.biografia = biografia;
        this.foto = foto;
        this.banner = banner;
        this.rol = rol;
        this.correo = correo;
        this.idusuario = idusuario;
    }

    public String getNombre(){
        return this.nombre;
    }

    public String getApellido(){
        return this.apellido;
    }

    public String getBiografia(){
        return this.biografia;
    }

    public String getFoto(){
        return this.foto;
    }

    public String getBanner(){
        return this.banner;
    }

    public String getRol(){
        return this.rol;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public void setApellido(String apellido){
        this.apellido = apellido;
    }

    public void setBiografia(String biografia){
        this.biografia = biografia;
    }

    public void setFoto(String foto){
        this.foto = foto;   
    }

    public void setBanner(String banner){
        this.banner = banner;
    }

    public void setRol(String rol){
        this.rol = rol;
    }

    public String getCorreo(){
        return this.correo;
    }

    public void setCorreo(String correo){
        this.correo = correo;
    }

    public String getIdusuario(){
        return this.idusuario;
    }

    public void setIdusuario(String idusuario){
        this.idusuario = idusuario;
    }
}
