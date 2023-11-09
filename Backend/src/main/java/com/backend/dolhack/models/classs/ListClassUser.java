package com.backend.dolhack.models.classs;

public class ListClassUser {
    private String idclase;
    private String titulo;
    private String imagen;

    private String descripcion;
    public ListClassUser() {
    }

    public ListClassUser(String idclase, String titulo, String imagen, String descripcion) {
        this.idclase = idclase;
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    public String getIdclase() {
        return idclase;
    }

    public void setIdclase(String idclase) {
        this.idclase = idclase;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo; 
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen; 
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
