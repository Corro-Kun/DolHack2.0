package com.backend.dolhack.models.classs;

public class LQuialificationsStudent {
    private String foto;
    private String nombre;
    private String apellido;
    private String preguntas;
    private String respuestas;
    private String calificacion;
    private String titulo;

    public LQuialificationsStudent(){

    }

    public LQuialificationsStudent(String foto, String nombre, String apellido, String preguntas, String respuestas, String calificacion, String titulo) {
        this.foto = foto;
        this.nombre = nombre;
        this.apellido = apellido;
        this.preguntas = preguntas;
        this.respuestas = respuestas;
        this.calificacion = calificacion;
        this.titulo = titulo;
    }

    public String getFoto() {
        return foto;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getPreguntas() {
        return preguntas;
    }

    public String getRespuestas() {
        return respuestas;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public void setNombre(String nombre) {
        nombre = nombre;
    }

    public void setApellido(String apellido) {
        apellido = apellido;
    }

    public void setPreguntas(String preguntas) {
        this.preguntas = preguntas;
    }

    public void setRespuestas(String respuestas) {
        this.respuestas = respuestas;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

}
