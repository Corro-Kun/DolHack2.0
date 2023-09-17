package com.backend.dolhack.models.exam;

import java.util.List;

public class QuizViewr {
    private String idquiz;
    private String titulo;
    private String descripcion;
    private List<PreguntaViewr> preguntas;

    public QuizViewr() {
    }

    public QuizViewr(String idquiz, String titulo, String descripcion, List<PreguntaViewr> preguntas) {
        this.idquiz = idquiz;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.preguntas = preguntas;
    }

    public String getIdquiz() {
        return idquiz;
    }

    public void setIdquiz(String idquiz) {
        this.idquiz = idquiz;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo= titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion= descripcion;
    }

    public List<PreguntaViewr> getPreguntas() {
        return preguntas;
    }

    public void setPreguntas(List<PreguntaViewr> preguntas) {
        this.preguntas= preguntas;
    }
}
