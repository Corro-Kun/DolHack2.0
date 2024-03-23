package com.backend.dolhack.middlewares;

import com.backend.dolhack.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;

public class VerificCookie {
    private final UsuarioRepositorio repositorio;

    @Autowired
    public VerificCookie(UsuarioRepositorio repositorio){
        this.repositorio = repositorio;
    }
    
    public boolean verificCookie(String cookie)throws Exception {
        if (cookie == null) {
            return false;
        }
        if(!repositorio.ValidUser(cookie)){
            return false;
        }
        
        return true;
    } 
}
