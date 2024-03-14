package com.backend.dolhack.models.exam;

import java.util.List;

public class StateView {
    private String imagen;
    private String nombre;
    private String apellido;
    private String correo;
    private int totalExamenes;
    private int examenesRespondidos;
    private float totalCalificacion;
    private List<String> examenesPendientes;

    public StateView(String imagen,String nombre, String apellido, String correo, int totalExamenes, int examenesRespondidos, float totalCalificacion, List<String> examenesPendientes) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.totalExamenes = totalExamenes;
        this.examenesRespondidos = examenesRespondidos;
        this.totalCalificacion = totalCalificacion;
        this.examenesPendientes = examenesPendientes;
    }

    public StateView() {
    }

    public String getImagen() {
        return imagen;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getCorreo() {
        return correo;
    }

    public int getTotalExamenes() {
        return totalExamenes;
    }

    public int getExamenesRespondidos() {
        return examenesRespondidos;
    }

    public float getTotalCalificacion() {
        return totalCalificacion;
    }

    public List<String> getExamenesPendientes() {
        return examenesPendientes;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public void setTotalExamenes(int totalExamenes) {
        this.totalExamenes = totalExamenes;
    }

    public void setExamenesRespondidos(int examenesRespondidos) {
        this.examenesRespondidos = examenesRespondidos;
    }

    public void setTotalCalificacion(float totalCalificacion) {
        this.totalCalificacion = totalCalificacion;
    }

    public void setExamenesPendientes(List<String> examenesPendientes) {
        this.examenesPendientes = examenesPendientes;
    }
}
