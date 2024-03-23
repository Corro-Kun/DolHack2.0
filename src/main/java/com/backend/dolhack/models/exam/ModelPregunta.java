package com.backend.dolhack.models.exam;

public class ModelPregunta {
    private String idPregunta;
    private String pregunta;
    private float puntos;
    private String quiz_idquiz;

    public ModelPregunta() {
    }

    public ModelPregunta(String idPregunta, String pregunta, String quiz_idquiz, float puntos) {
        this.idPregunta = idPregunta;
        this.pregunta = pregunta;
        this.quiz_idquiz = quiz_idquiz;
        this.puntos = puntos;
    }

    public String getIdPregunta() {
        return idPregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public String getQuiz_idquiz() {
        return quiz_idquiz;
    }

    public void setIdPregunta(String idPregunta) {
        this.idPregunta = idPregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public float getPuntos() {
        return puntos;
    }

    public void setPuntos(float puntos) {
        this.puntos = puntos;
    }

    public void setQuiz_idquiz(String quiz_idquiz) {
        this.quiz_idquiz = quiz_idquiz;
    }
}
