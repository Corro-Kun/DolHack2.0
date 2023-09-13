package com.backend.dolhack.controllers;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.models.classs.UpdateClass;
import com.backend.dolhack.models.classs.newClassModel;
import com.backend.dolhack.models.message;
import com.backend.dolhack.repositories.ClassRepositorio;
import java.time.Duration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpCookie;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    // Crear una clase

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

    // Listas de clases

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class")
    public ResponseEntity ListClass(){
        try {
            return  ResponseEntity.status(200).body(repositorio.listClass());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // Informacion de una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/class/{id}")
    public ResponseEntity classData(@PathVariable String id){
        try {
            return ResponseEntity.status(200).body(repositorio.infoClass(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
    // lista de las clases de un usuario(añadir verificador de rol)

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/yourclass")
    public ResponseEntity YourClass(@CookieValue("token") String token){
        try {
            return ResponseEntity.status(200).body(repositorio.listClassUser(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // entrar a una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/enter/class/{id}")
    public ResponseEntity enterClass(@PathVariable String id) throws  Exception {
        try {
            String value = new Crypto().Encrypt(id);
            HttpCookie cookie = ResponseCookie.from("class", value)
                .maxAge(Duration.ofDays(1))
                .secure(true)
                .path("/")
                .sameSite("none")
                .build();
                            
            return ResponseEntity.ok().header("set-cookie", cookie.toString()).body(new message("Bienvenido a la clase")); 

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 

    // modificar una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PutMapping("/class")
    public ResponseEntity modifyClass(@CookieValue("class") String id, @RequestBody UpdateClass clase) throws Exception {
        try {
            boolean result = repositorio.UpdateClassP(id, clase);
            return ResponseEntity.ok().body(new message("Clase modificada con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
    // mandar datos para el formulario de una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class/form")
    public ResponseEntity classForm(@CookieValue("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.infoClass(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }        

    // eliminar una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @DeleteMapping("/class")
    public ResponseEntity deleteClass(@CookieValue("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            repositorio.DeleteClass(id);
            return ResponseEntity.status(200).body(new message("Clase eliminada con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
         

    // validar su rol en una clase
     
}
