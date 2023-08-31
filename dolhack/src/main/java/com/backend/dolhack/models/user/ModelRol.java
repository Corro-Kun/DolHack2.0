package com.backend.dolhack.models.user;

public class ModelRol {
    // datos de la tabla rol
    private int idrol;
    private String rol;

    // constructor basio
    public ModelRol() {
    }

    // constructor con parametros
    public ModelRol(int idrol, String rol) {
        this.idrol = idrol;
        this.rol = rol;
    }

    // metodo Getter de idrol
    public int getIdrol() {
        return this.idrol;
    }

    // metodo Setter de idrol
    public void setIdrol(int idrol) {
        this.idrol = idrol;
    }

    // metodo Getter de rol
    public String getRol() {
        return this.rol;
    }

    // metodo Setter de rol
    public void setRol(String rol) {
        this.rol = rol;
    }
}
