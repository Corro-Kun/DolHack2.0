package com.backend.dolhack.models.classs;

public class ModelLista {
    private String idlista;
    private String clase;

    public ModelLista() {
    }

    public ModelLista(String idlista, String clase) {
        this.idlista = idlista;
        this.clase = clase;
    }

    public String getIdlista() {
        return idlista;
    }

    public void setIdlista(String idlista) {
        this.idlista = idlista;
    }

    public String getClase() {
        return clase;
    }

    public void setClase(String clase) {
        this.clase= clase;
    }

}
