package com.backend.dolhack.models.user;

public class updateUserModel {
    private String nombre;
    private String apellido;
    private String biografia;
    private String telefono;

    public updateUserModel() {
    }

    public updateUserModel(String nombre, String apellido, String biografia, String telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.biografia = biografia;
        this.telefono = telefono;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getBiografia() {
        return biografia;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido){
        this.apellido = apellido;
    }

    public void setBiografia(String biografia){
        this.biografia = biografia;
    }

    public void setTelefono(String telefono){
        this.telefono = telefono;
    }
}
