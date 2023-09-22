package com.backend.dolhack.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.models.message;
import com.backend.dolhack.repositories.HomeRepositorio;

@RequestMapping("/home")
@RestController
public class home {

    private final HomeRepositorio repositorio;

    @Autowired
    public home(HomeRepositorio repositorio){
        this.repositorio = repositorio;
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/teacher")
    public ResponseEntity profesor() throws Exception {
        try {
            return ResponseEntity.ok().body(repositorio.getUserList("profesor"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/student")
    public ResponseEntity estudiante(){
        try {
            return ResponseEntity.ok().body(repositorio.getUserList("estudiante"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/peopleList")
    public ResponseEntity yourList(@CookieValue("token") String id){
        try {
            String idU = new Crypto().Decrypt(id);
            return ResponseEntity.ok().body(repositorio.getList(idU));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/main")
    public ResponseEntity Main(){
        try {
            return ResponseEntity.ok().body(repositorio.Main());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
}
