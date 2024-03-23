package com.backend.dolhack.models.exam;

public class OptionModel {
    private String option;
    private int qualification;

    public OptionModel() {
    }

    public OptionModel(String option, int qualification) {
        this.option = option;
        this.qualification = qualification;
    }

    public String getOption() {
        return option;
    }

    public int getQualification() {
        return qualification;
    }

    public void setOption(String option) {
        this.option = option;
    }

    public void setQualification(int qualification) {
        this.qualification = qualification;
    }
}
