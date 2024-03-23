package com.backend.dolhack.models.classs;

public class newClassModel {
    private String titulo;
    private String descripcion;
    private String fecha_inicio;
    private String fecha_finalizacion;
    private String tipo;
    private String nivel;

    public newClassModel(){
    }

    public newClassModel(String titulo, String descripcion, String fecha_inicio, String fecha_finalizacion, String tipo, String nivel){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.fecha_inicio=fecha_inicio;
        this.fecha_finalizacion=fecha_finalizacion;
        this.tipo=tipo;
        this.nivel=nivel;
    }

    public String getTitulo(){
        return this.titulo;
    }

    public String getDescripcion(){
        return this.descripcion;
    }

    public String getFecha_inicio(){
        return this.fecha_inicio;
    }

    public String getFecha_finalizacion(){
        return this.fecha_finalizacion;
    }

    public String getTipo(){
        return this.tipo;
    }

    public String getNivel(){
        return this.nivel;
    }

    public void setTitulo(String titulo){
        this.titulo=titulo;
    }

    public void setDescripcion(String descripcion){
        this.descripcion=descripcion;
    }

    public void setFecha_inicio(String fecha_inicio){
        this.fecha_inicio=fecha_inicio;
    }

    public void setFecha_finalizacion(String fecha_finalizacion){
        this.fecha_finalizacion=fecha_finalizacion;
    }

    public void setTipo(String tipo){
        this.tipo=tipo;
    }

    public void setNivel(String nivel){
        this.nivel=nivel;
    }

}
