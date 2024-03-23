package com.backend.dolhack.models.exam;

public class ModelRespuesta {
    private String idrespuesta;
    private String opcion;
    private String respuesta;
    private String calificacion;
    private String quiz_idquiz;
    private String pregunta_idpregunta;
    private String usuario_idusuario;
    private String clase_idclase;

    public ModelRespuesta() {
    }

    public ModelRespuesta( String idrespuesta, String opcion, String respuesta, String calificacion, String quiz_idquiz, String pregunta_idpregunta, String usuario_idusuario, String clase_idclase) {
        this.idrespuesta = idrespuesta;
        this.opcion = opcion;
        this.respuesta = respuesta;
        this.calificacion = calificacion;
        this.quiz_idquiz = quiz_idquiz;
        this.pregunta_idpregunta = pregunta_idpregunta;
        this.usuario_idusuario = usuario_idusuario;
        this.clase_idclase = clase_idclase;
    }

    public String getIdrespuesta() {
        return idrespuesta;
    }

    public void setIdrespuesta(String idrespuesta) {
        this.idrespuesta = idrespuesta;
    }

    public String getOpcion() {
        return opcion;
    }

    public void setOpcion(String opcion) {
        this.opcion = opcion;
    }

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }

    public String getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(String calificacion) {
        this.calificacion = calificacion;
    }

    public String getQuiz_idquiz() {
        return quiz_idquiz;
    }

    public void setQuiz_idquiz(String quiz_idquiz) {
        this.quiz_idquiz = quiz_idquiz;
    }

    public String getPregunta_idpregunta() {
        return pregunta_idpregunta;
    }

    public void setPregunta_idpregunta(String pregunta_idpregunta) {
        this.pregunta_idpregunta = pregunta_idpregunta;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }

    public String getClase_idclase() {
        return clase_idclase;
    }

    public void setClase_idclase(String clase_idclase) {
        this.clase_idclase = clase_idclase;
    }
}
