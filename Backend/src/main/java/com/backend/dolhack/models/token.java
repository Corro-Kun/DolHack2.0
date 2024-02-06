package com.backend.dolhack.models;

public class token {
    private String token;

    public token(String token){
        this.token = token;
    }

    public String getMessage(){
        return token;
    }

    public void setMessage(String token){
        this.token = token;
    }
}
