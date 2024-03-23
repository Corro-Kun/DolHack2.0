package com.backend.dolhack.models.classs;

public class ListPostClass {
    private String nombre;
    private String apellido;
    private String foto;
    private String texto;
    private String imagen;

    public ListPostClass(String nombre, String apellido, String foto, String texto, String imagen) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
        this.texto = texto;
        this.imagen = imagen;
    }

    public ListPostClass() {
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getFoto() {
        return foto;
    }

    public String getTexto() {
        return texto;
    }

    public String getImagen() {
        return imagen;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

}
