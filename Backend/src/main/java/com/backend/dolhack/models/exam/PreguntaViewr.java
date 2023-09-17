package com.backend.dolhack.models.exam;

import java.util.List;

public class PreguntaViewr {
    private String idpregunta;
    private String pregunta;
    private List<ModelOpcion> opciones;
    
    public PreguntaViewr() {
    }

    public PreguntaViewr(String idpregunta, String pregunta, List<ModelOpcion> opciones) {
        this.idpregunta = idpregunta;
        this.pregunta = pregunta;
        this.opciones = opciones;
    }

    public String getIdpregunta() {
        return idpregunta;
    }

    public void setIdpregunta(String idpregunta) {
        this.idpregunta = idpregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta= pregunta;
    }

    public List<ModelOpcion> getOpciones() {
        return opciones;
    }

    public void setOpciones(List<ModelOpcion> opciones) {
        this.opciones= opciones;
    }
}
