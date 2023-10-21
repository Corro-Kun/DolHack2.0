package com.backend.dolhack.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.models.exam.ListAnswersModel;
import com.backend.dolhack.models.exam.NewQuizModel;
import com.backend.dolhack.models.exam.getExamUpdate;
import com.backend.dolhack.models.message;
import com.backend.dolhack.repositories.ExamRepositorio;

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RestController
public class exam {
    private final ExamRepositorio repositorio;

    @Autowired
    public exam(ExamRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    // crear un examen

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

    // obtener examenes de una clase


    @GetMapping("/exam")
    public ResponseEntity getExam(@CookieValue("class") String id) throws  Exception {
        try {
            String idC = new Crypto().Decrypt(id);
            return ResponseEntity.ok().body(repositorio.getQuizzes(idC));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // obtener examen por id

    @GetMapping("/quiz/{id}")
    public ResponseEntity getQuiz(@PathVariable String id) throws  Exception {
        try {
            return ResponseEntity.ok().body(repositorio.getQuiz(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // verifica si ya iso el examen

    @GetMapping("/exam/verify/{idQ}")
    public ResponseEntity getExamVerify(@PathVariable String idQ, @CookieValue("token") String idU) throws Exception {
        try {
            String idu = new Crypto().Decrypt(idU);
            return ResponseEntity.ok().body(repositorio.VerificExam(idu, idQ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // enviar respuestas del examen

    @PostMapping("/exam/{idQ}")
    public ResponseEntity AnswerExam(@PathVariable String idQ, @RequestBody ListAnswersModel answer, @CookieValue("token") String idU, @CookieValue("class") String idC ) throws  Exception {
        try {
            String idc = new Crypto().Decrypt(idC);
            String idu = new Crypto().Decrypt(idU);
            boolean result = repositorio.PostAnswer(answer, idc , idu, idQ);
            if(!result){
                return ResponseEntity.badRequest().body(new message("Ya contestaste este examen"));
            }
            return ResponseEntity.ok().body(new message("success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // eliminar examen

    @DeleteMapping("/exam/{idQ}")
    public ResponseEntity DeleteExam(@PathVariable String idQ, @CookieValue("class") String idC ) throws  Exception {
        try {
            String idc = new Crypto().Decrypt(idC);
            repositorio.DeleteQuiz(idc , idQ);
            return ResponseEntity.ok().body(new message("success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }



    @GetMapping("/exam/{idQ}")
    public ResponseEntity getExamU(@PathVariable String idQ, @CookieValue("class") String idC ) throws  Exception {
        try {
            String idc = new Crypto().Decrypt(idC);
            return ResponseEntity.ok().body(repositorio.getQuiz(idQ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 

    @PutMapping("/exam/{idQ}")
    public ResponseEntity PutExam(@PathVariable String idQ, @RequestBody getExamUpdate Quiz, @CookieValue("class") String idC ) throws  Exception {
        try {
            String idc = new Crypto().Decrypt(idC);
            repositorio.UpdateQuiz(Quiz);
            return ResponseEntity.ok().body(new message("success"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
     
}
