package com.backend.dolhack.controllers;

import com.backend.dolhack.models.classs.classListModel;
import com.backend.dolhack.models.classs.idModel;

import org.springframework.web.bind.annotation.PathVariable;
import com.backend.dolhack.models.classs.newClassModel;
import com.backend.dolhack.models.message;
import com.backend.dolhack.repositories.ClassRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class classD {
    private final ClassRepositorio repositorio;

    @Autowired
    public classD(ClassRepositorio repositorio){
        this.repositorio = repositorio;
    } 

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/class")
    public ResponseEntity<message> CreateClass(@CookieValue("token") String token, @RequestPart("file") MultipartFile file, @RequestPart("titulo") String titulo, @RequestPart("descripcion") String descripcion, @RequestPart("fecha_inicio") String fecha_inicio, @RequestPart("fecha_finalizacion") String fecha_finalizacion, @RequestPart("tipo") String tipo, @RequestPart("nivel") String nivel) throws Exception {
        try {
            newClassModel clase = new newClassModel(titulo, descripcion, fecha_inicio, fecha_finalizacion, tipo, nivel);
            repositorio.newClass(clase, token, file);
            return ResponseEntity.ok().body(new message("Clase creada con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class")
    public ResponseEntity ListClass(){
        try {
            return  ResponseEntity.status(200).body(repositorio.listClass());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/class/id")
    public ResponseEntity classData(@RequestBody idModel data){
        try {
            return ResponseEntity.status(200).body(repositorio.infoClass(data.getIdclase()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
     
}
