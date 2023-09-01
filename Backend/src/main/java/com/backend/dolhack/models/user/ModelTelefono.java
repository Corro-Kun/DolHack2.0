package com.backend.dolhack.models.user;

public class ModelTelefono {
    private int idtelefono;
    private String telefono;
    private int usuario_idusuario;
    
    public ModelTelefono() {
    }

    public ModelTelefono(int idtelefono, String telefono, int usuario_idusuario) {
        this.idtelefono = idtelefono;
        this.telefono = telefono;
        this.usuario_idusuario = usuario_idusuario;
    }

    public int getIdtelefono() {
        return this.idtelefono;
    }

    public void setIdtelefono(int idtelefono) {
        this.idtelefono = idtelefono;
    }

    public String getTelefono() {
        return this.telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public int getUsuario_idusuario() {
        return this.usuario_idusuario;
    }

    public void setUsuario_idusuario(int usuario_idusuario) {
        this.usuario_idusuario = usuario_idusuario;
    }
}
