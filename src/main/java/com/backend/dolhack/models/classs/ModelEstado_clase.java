package com.backend.dolhack.models.classs;

public class ModelEstado_clase {
    private int idestado;
    private int estado_clase;
    private int estado_calificacion;
    private String clase_idclase;

    public ModelEstado_clase(int idestado, int estado_clase, int estado_calificacion, String clase_idclase) {
        this.idestado = idestado;
        this.estado_clase = estado_clase;
        this.estado_calificacion = estado_calificacion;
        this.clase_idclase = clase_idclase;
    }

    public ModelEstado_clase() {
    }

    public int getIdestado() {
        return idestado;
    }

    public void setIdestado(int idestado) {
        this.idestado = idestado;
    }

    public int getEstado_clase() {
        return estado_clase;
    }

    public void setEstado_clase(int estado_clase) {
        this.estado_clase = estado_clase;
    }

    public int getEstado_calificacion() {
        return estado_calificacion;
    }

    public void setEstado_calificacion(int estado_calificacion) {
        this.estado_calificacion = estado_calificacion;
    }

    public String getClase_idclase() {
        return clase_idclase;
    }

    public void setClase_idclase(String clase_idclase) {
        this.clase_idclase = clase_idclase;
    }
}
