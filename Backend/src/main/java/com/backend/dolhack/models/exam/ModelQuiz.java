package com.backend.dolhack.models.exam;

public class ModelQuiz {
    private String idquiz;
    private String titulo;
    private String descripcion;
    private String clase_idclase;
    private String usuario_idusuario;

    public ModelQuiz() {
    }

    public ModelQuiz(String idquiz, String titulo, String descripcion, String clase_idclase, String usuario_idusuario) {
        this.idquiz = idquiz;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.clase_idclase = clase_idclase;
        this.usuario_idusuario = usuario_idusuario;
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
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public String getClase_idclase() {
        return clase_idclase;
    }

    public void setClase_idclase(String clase_idclase) {
        this.clase_idclase = clase_idclase;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
