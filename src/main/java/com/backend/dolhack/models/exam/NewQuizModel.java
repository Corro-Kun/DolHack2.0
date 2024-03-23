package com.backend.dolhack.models.exam;

import java.util.List;

public class NewQuizModel {
    private String title;
    private String description;
    private List<QuestionModel> questions;

    public NewQuizModel() {
    }

    public NewQuizModel(String title, String description, List<QuestionModel> questions) {
        this.title = title;
        this.description = description;
        this.questions = questions;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription(){
        return description; 
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description){
        this.description = description; 
    }

    public List<QuestionModel> getQuestions() {
        return questions;
    }

    public void setQuestions(List<QuestionModel> questions) {
        this.questions = questions;
    }

}
