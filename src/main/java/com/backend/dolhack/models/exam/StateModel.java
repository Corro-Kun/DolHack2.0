package com.backend.dolhack.models.exam;

public class StateModel {
    private int TotalExam;
    private int TotalRespondidos;
    private float TotalCalificacion;

    public StateModel(int totalExam, int totalRespondidos, float totalCalificacion) {
        TotalExam = totalExam;
        TotalRespondidos = totalRespondidos;
        TotalCalificacion = totalCalificacion;
    }

    public int getTotalExam() {
        return TotalExam;
    }

    public void setTotalExam(int totalExam) {
        TotalExam = totalExam;
    }

    public int getTotalRespondidos() {
        return TotalRespondidos;
    }

    public void setTotalRespondidos(int totalRespondidos) {
        TotalRespondidos = totalRespondidos;
    }

    public float getTotalCalificacion() {
        return TotalCalificacion;
    }

    public void setTotalCalificacion(float totalCalificacion) {
        TotalCalificacion = totalCalificacion;
    }
}
