package com.backend.dolhack.models.classs;

public class ListClassUser {
    private String idclase;
    private String titulo;
    private String imagen;

    public ListClassUser() {
    }

    public ListClassUser(String idclase, String titulo, String imagen) {
        this.idclase = idclase;
        this.titulo = titulo;
        this.imagen = imagen;
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
}
