package com.backend.dolhack.models.exam;

public class ModelOpcion {
    private int idopcion;
    private String opcion;
    private String respuesta;
    private int calificacion;
    private String pregunta_idpregunta;

    public ModelOpcion() {
    }

    public ModelOpcion(int idopcion, String opcion, String respuesta, int calificacion, String pregunta_idpregunta) {
        this.idopcion = idopcion;
        this.opcion = opcion;
        this.respuesta = respuesta;
        this.calificacion = calificacion;
        this.pregunta_idpregunta = pregunta_idpregunta;
    }

    public int getIdopcion() {
        return idopcion;
    }

    public void setIdopcion(int idopcion) {
        this.idopcion = idopcion;
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

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion= calificacion;
    }

    public String getPregunta_idpregunta() {
        return pregunta_idpregunta;
    }

    public void setPregunta_idpregunta(String pregunta_idpregunta) {
        this.pregunta_idpregunta = pregunta_idpregunta;
    }


}
