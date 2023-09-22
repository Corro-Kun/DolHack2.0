package com.backend.dolhack.models.home;

import java.util.List;

import com.backend.dolhack.models.classs.classListModel;

public class MainModel {
    private List<classListModel> clase;
    private List<userListModel> profesor;

    public MainModel(){
    }

    public MainModel(List<userListModel> profesor, List<classListModel> clase){
        this.profesor = profesor;
        this.clase = clase;
    }
    
    public List<userListModel> getProfesor() {
        return profesor;
    }

    public void setProfesor(List<userListModel> profesor) {
        this.profesor = profesor;
    }

    public List<classListModel> getClase() {
        return clase;
    }

    public void setClase(List<classListModel> clase) {
        this.clase = clase;
    }

}
