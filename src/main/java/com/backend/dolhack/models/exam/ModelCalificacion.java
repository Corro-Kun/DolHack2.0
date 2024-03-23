package com.backend.dolhack.models.exam;

public class ModelCalificacion {
    private String idcalificacion;
    private int preguntas;
    private int respuestas;
    private float calificacion;
    private String quiz_idquiz;
    private String usuario_idusuario;
    private String clase_idclase;

    public ModelCalificacion() {
    }

    public ModelCalificacion(String idcalificacion, int preguntas, int respuestas, float calificacion, String quiz_idquiz, String usuario_idusuario, String clase_idclase) {
        this.idcalificacion = idcalificacion;
        this.preguntas = preguntas;
        this.respuestas = respuestas;
        this.calificacion = calificacion;
        this.quiz_idquiz = quiz_idquiz;
        this.usuario_idusuario = usuario_idusuario;
        this.clase_idclase = clase_idclase;
    }

    public String getIdcalificacion() {
        return idcalificacion;
    }

    public void setIdcalificacion(String idcalificacion) {
        this.idcalificacion = idcalificacion;
    }

    public int getPreguntas() {
        return preguntas;
    }

    public void setPreguntas(int preguntas) {
        this.preguntas = preguntas;
    }

    public int getRespuestas() {
        return respuestas;
    }

    public void setRespuestas(int respuestas) {
        this.respuestas = respuestas;
    }

    public float getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(float calificacion) {
        this.calificacion = calificacion;
    }

    public String getQuiz_idquiz() {
        return quiz_idquiz;
    }

    public void setQuiz_idquiz(String quiz_idquiz) {
        this.quiz_idquiz = quiz_idquiz;
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
