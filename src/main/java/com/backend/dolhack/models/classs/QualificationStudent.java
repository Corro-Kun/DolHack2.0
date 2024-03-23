package com.backend.dolhack.models.classs;

public class QualificationStudent {
    private String titulo;
    private String preguntas;
    private String respuestas;
    private int calificacion;

    public QualificationStudent() {
    }

    public QualificationStudent(String titulo, String preguntas, String respuestas, int calificacion) {
        this.titulo = titulo;
        this.preguntas = preguntas;
        this.respuestas = respuestas;
        this.calificacion = calificacion;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public String getPreguntas() {
        return this.preguntas;
    }

    public String getRespuestas() {
        return this.respuestas;
    }

    public int getCalificacion() {
        return this.calificacion;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setPreguntas(String preguntas) {
        this.preguntas = preguntas;
    }

    public void setRespuestas(String respuestas) {
        this.respuestas = respuestas;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

}
