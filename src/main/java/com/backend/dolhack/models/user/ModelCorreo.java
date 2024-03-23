package com.backend.dolhack.models.user;

public class ModelCorreo {
    // datos de la tabla correo
    private String idcorreo;
    private String correo;
    private String usuario_idusuario; 

    // constructor basio
    public ModelCorreo() {
    }

    // constructor con parametros
    public ModelCorreo(String idcorreo, String correo, String usuario_idusuario) {
        this.idcorreo = idcorreo;
        this.correo = correo;
        this.usuario_idusuario = usuario_idusuario;
    }

    // metodo Getter de idcorreo
    public String getIdcorreo() {
        return this.idcorreo;
    }

    // metodo Setter de idcorreo
    public void setIdcorreo(String idcorreo) {
        this.idcorreo = idcorreo;
    }

    // metodo Getter de correo
    public String getCorreo() {
        return this.correo;
    }

    // metodo Setter de correo
    public void setCorreo(String correo) {
        this.correo = correo;
    }

    // metodo Getter de usuario_idusuario
    public String getUsuario_idusuario() {
        return this.usuario_idusuario;
    }

    // metodo Setter de usuario_idusuario
    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }
}
