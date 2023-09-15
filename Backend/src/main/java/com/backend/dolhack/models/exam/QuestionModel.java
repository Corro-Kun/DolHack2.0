package com.backend.dolhack.models.exam;

import java.util.List;

public class QuestionModel {
    private String question;
    private List<OptionModel> options; 

    public QuestionModel() {
    }

    public QuestionModel(String question, List<OptionModel> options) {
        this.question = question;
        this.options = options;
    }

    public String getQuestion() {
        return question;
    }

    public List<OptionModel> getOptions() {
        return options;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public void setOptions(List<OptionModel> options) {
        this.options = options;
    }
}
