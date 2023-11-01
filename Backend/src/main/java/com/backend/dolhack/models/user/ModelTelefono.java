package com.backend.dolhack.models.user;

public class ModelTelefono {
    private String idtelefono;
    private String telefono;
    private String usuario_idusuario;

    public ModelTelefono(){

    }

    public ModelTelefono(String idtelefono, String telefono, String usuario_idusuario){
        this.idtelefono = idtelefono;
        this.telefono = telefono;
        this.usuario_idusuario = usuario_idusuario;
    }

    public String getIdtelefono() {
        return idtelefono;
    }

    public void setIdtelefono(String idtelefono) {
        this.idtelefono = idtelefono;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getUsuario_idusuario() {
        return usuario_idusuario;
    }

    public void setUsuario_idusuario(String usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }
}
