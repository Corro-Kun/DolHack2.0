package com.backend.dolhack.models.exam;

import java.util.List;

public class QuestionModel {
    private String question;
    private float points;
    private List<OptionModel> options; 

    public QuestionModel() {
    }

    public QuestionModel(String question, float points,List<OptionModel> options) {
        this.question = question;
        this.options = options;
        this.points = points;
    }

    public String getQuestion() {
        return question;
    }

    public List<OptionModel> getOptions() {
        return options;
    }

    public float getPoints() {
        return points;
    }

    public void setPoints(float points) {
        this.points = points;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setOptions(List<OptionModel> options) {
        this.options = options;
    }
}
