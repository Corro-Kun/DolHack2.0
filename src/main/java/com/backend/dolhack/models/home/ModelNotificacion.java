package com.backend.dolhack.models.home;

public class ModelNotificacion {
    private int idnotificacion;
    private String titulo_notificacion;
    private String texto_notificacion;
    private String usuario_idusuario;

    public ModelNotificacion() {
    }

    public ModelNotificacion(int idnotificacion, String titulo_notificacion, String texto_notificacion, String usuario_idusuario) {
        this.idnotificacion = idnotificacion;
        this.titulo_notificacion = titulo_notificacion;
        this.texto_notificacion = texto_notificacion;
        this.usuario_idusuario = usuario_idusuario;
    }

    public int getIdnotificacion() {
        return idnotificacion;
    }

    public void setIdnotificacion(int idnotificacion) {
        this.idnotificacion = idnotificacion;
    }

    public String getTitulo_notificacion() {
        return titulo_notificacion;
    }

    public void setTitulo_notificacion(String titulo_notificacion) {
        this.titulo_notificacion = titulo_notificacion;
    }

    public String getTexto_notificacion() {
        return texto_notificacion;
    }

    public void setTexto_notificacion(String texto_notificacion) {
        this.texto_notificacion = texto_notificacion;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }
}
