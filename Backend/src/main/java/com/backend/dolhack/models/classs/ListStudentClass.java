package com.backend.dolhack.models.classs;

public class ListStudentClass {
    private String idusuario;
    private String nombre;
    private String apellido;
    private String foto;

    public ListStudentClass(String idusuario, String nombre, String apellido, String foto) {
        this.idusuario = idusuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto = foto;
    }

    public ListStudentClass() {
    }

    public String getIdusuario() {
        return this.idusuario;
    }

    public void setIdusuario(String idusuario) {
        this.idusuario = idusuario;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public ListStudentClass idusuario(String idusuario) {
        this.idusuario = idusuario;
        return this;
    }

    public ListStudentClass nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public ListStudentClass apellido(String apellido) {
        this.apellido = apellido;
        return this;
    }

    public String getFoto() {
        return this.foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

}
