package com.backend.dolhack.models.home;

public class ListPeople {
    private String usuario_idusuario;
    private String nombre;
    private String apellido;
    private String foto;

    public ListPeople(){

    }

    public ListPeople(String usuario_idusuario, String nombre, String apellido, String foto) {
        this.usuario_idusuario = usuario_idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre.substring(0,1).toUpperCase() + nombre.substring(1);
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido.substring(0,1).toUpperCase() + apellido.substring(1);
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }
}
