package com.backend.dolhack.models.exam;

import java.util.List;

public class ListAnswersModel {
    private List<AnswerModel> respuestas;

    public ListAnswersModel() {
    }

    public ListAnswersModel(List<AnswerModel> respuestas) {
        this.respuestas = respuestas;
    }

    public List<AnswerModel> getRespuestas() {
        return respuestas;
    }

    public void setRespuestas(List<AnswerModel> respuestas) {
        this.respuestas = respuestas;
    }
}
