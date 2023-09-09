package com.backend.dolhack.models.classs;

public class classListModel {
    private String idclase;
    private String titulo;
    private String descripcion;
    private String fecha_inicio;
    private String fecha_finalizacion;
    private String nombretipo;
    private String nombrenivel;
    private String imagen;
    private String foto;

    public classListModel(){

    }

    public classListModel(String idclase, String titulo, String descripcion, String fecha_inicio, String fecha_finalizacion, String nombretipo, String nombrenivel, String imagen, String foto) {
        this.idclase = idclase;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_finalizacion = fecha_finalizacion;
        this.nombretipo = nombretipo;
        this.nombrenivel = nombrenivel;
        this.imagen = imagen;
        this.foto = foto;

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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) { 
        this.descripcion = descripcion;
    }

    public String getFecha_inicio() {
        return fecha_inicio;
    }

    public void setFecha_inicio(String fecha_inicio) { 
        this.fecha_inicio = fecha_inicio;
    }

    public String getFecha_finalizacion() {
        return fecha_finalizacion;
    }

    public void setFecha_finalizacion(String fecha_finalizacion) { 
        this.fecha_finalizacion = fecha_finalizacion;
    }

    public String getNombretipo() {
        return nombretipo;
    }

    public void setNombretipo(String nombretipo) { 
        this.nombretipo = nombretipo;
    }

    public String getNombrenivel() {
        return nombrenivel;
    }

    public void setNombrenivel(String nombrenivel) { 
        this.nombrenivel = nombrenivel;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) { 
        this.imagen = imagen;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) { 
        this.foto = foto;
    }
    
}
