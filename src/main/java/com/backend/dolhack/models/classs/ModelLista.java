package com.backend.dolhack.models.classs;

public class ModelLista {
    private int idlista;
    private String clase;

    public ModelLista() {
    }

    public ModelLista(int idlista, String clase) {
        this.idlista = idlista;
        this.clase = clase;
    }

    public int getIdlista() {
        return idlista;
    }

    public void setIdlista(int idlista) {
        this.idlista = idlista;
    }

    public String getClase() {
        return clase;
    }

    public void setClase(String clase) {
        this.clase= clase;
    }

}
