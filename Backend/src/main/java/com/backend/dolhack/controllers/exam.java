package com.backend.dolhack.controllers;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.models.exam.NewQuizModel;
import com.backend.dolhack.models.message;
import com.backend.dolhack.repositories.ExamRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class exam {
    private final ExamRepositorio repositorio;

    @Autowired
    public exam(ExamRepositorio repositorio) {
        this.repositorio = repositorio;
    }
    
    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/exam")
    public ResponseEntity postExam(@RequestBody NewQuizModel Quiz, @CookieValue("token") String token, @CookieValue("class") String id) throws  Exception {
        try {
            String idC = new Crypto().Decrypt(id);
            String idU = new Crypto().Decrypt(token);
            repositorio.newQuiz(idU, idC, Quiz);
            return ResponseEntity.ok().body(new message("success"));            
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
    
}
