package com.backend.dolhack.models.exam;

public class AnswerModel {
    private String pregunta_idpregunta;
    private String opcion;
    private String respuesta;
    private String calificacion;

    public AnswerModel() {
    }

    public AnswerModel(String pregunta_idpregunta, String opcion, String respuesta, String calificacion) {
        this.pregunta_idpregunta = pregunta_idpregunta;
        this.opcion = opcion;
        this.respuesta = respuesta;
        this.calificacion = calificacion;
    }

    public String getPregunta_idpregunta() {
        return pregunta_idpregunta;
    }

    public void setPregunta_idpregunta(String pregunta_idpregunta) {
        this.pregunta_idpregunta = pregunta_idpregunta;
    }

    public String getOpcion() {
        return opcion;
    }

    public void setOpcion(String opcion) {
        this.opcion= opcion;
    }

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta= respuesta;
    }

    public String getCalificacion() {
        return calificacion;
    }

}
