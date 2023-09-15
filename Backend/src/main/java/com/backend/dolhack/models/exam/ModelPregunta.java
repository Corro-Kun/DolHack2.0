package com.backend.dolhack.models.exam;

public class ModelPregunta {
    private int idPregunta;
    private String pregunta;
    private String quiz_idquiz;

    public ModelPregunta(int idPregunta, String pregunta, String quiz_idquiz) {
        this.idPregunta = idPregunta;
        this.pregunta = pregunta;
        this.quiz_idquiz = quiz_idquiz;
    }

    public int getIdPregunta() {
        return idPregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public String getQuiz_idquiz() {
        return quiz_idquiz;
    }

    public void setIdPregunta(int idPregunta) {
        this.idPregunta = idPregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public void setQuiz_idquiz(String quiz_idquiz) {
        this.quiz_idquiz = quiz_idquiz;
    }
}
