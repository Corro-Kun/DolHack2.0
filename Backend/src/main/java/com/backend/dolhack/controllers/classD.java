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
            if(repositorio.VerifyClassD(id) == false){
                return ResponseEntity.badRequest().body(new message("La clase no existe"));
            }
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
    public ResponseEntity modifyClass(@CookieValue("class") String id, @RequestBody UpdateClass clase, @CookieValue("token") String idU) throws Exception {
        try {
            String idC = new Crypto().Decrypt(idU);
            if (repositorio.VerifyRol(idC) == 2) {
                return ResponseEntity.badRequest().body(new message("No tienes permisos para modificar esta clase"));
            }
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
    public ResponseEntity deleteClass(@CookieValue("class") String key, @CookieValue("token") String idU) throws Exception {
        try {
            String idC = new Crypto().Decrypt(idU);
            if (repositorio.VerifyRol(idC) == 2) {
                return ResponseEntity.badRequest().body(new message("No tienes permisos para eliminar esta clase"));
            }
            String id = new Crypto().Decrypt(key);
            repositorio.DeleteClass(id);
            return ResponseEntity.status(200).body(new message("Clase eliminada con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
         

    // validar su rol en una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class/verify")
    public ResponseEntity verifyClass(@CookieValue("class") String key, @CookieValue("token") String key2) throws Exception {
        try {
            String idC = new Crypto().Decrypt(key);
            String idU = new Crypto().Decrypt(key2);
            if(repositorio.VerifyClassD(idC) == false){
                return ResponseEntity.badRequest().body(new message("La clase no existe"));
            }
            return ResponseEntity.status(200).body(repositorio.VerifyRol(idU));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 

    // registrar a estudiantes en una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class/register/{id}")
    public ResponseEntity StudentRegister(@CookieValue("token") String key , @PathVariable String id) throws Exception {
        try {
            String idU = new Crypto().Decrypt(key);
            if(repositorio.VerifyClassD(id) == false){
                return ResponseEntity.badRequest().body(new message("La clase no existe"));
            }
            if(repositorio.VerifyRol(idU) == 1){
                return ResponseEntity.badRequest().body(new message("Un profesor no puede registrarse en una clase"));
            }
            boolean valid = repositorio.RegisterStudent(idU, id);

            if(valid == false){
                return ResponseEntity.badRequest().body(new message("Ya estas registrado en esta clase"));
            }

            return ResponseEntity.status(200).body(new message("Estudiante registrado con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
     
    // lista de estudiantes registrados en una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class/student")
    public ResponseEntity StuentList(@CookieValue("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.StudentListC(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // Publicar en la clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/class/post")
    public ResponseEntity PostClass(@CookieValue("class") String key, @CookieValue("token") String idU ,@RequestPart(name="file", required=false) MultipartFile file, @RequestPart(name="post", required=true) String text ) throws Exception {
        try {
            String idC = new Crypto().Decrypt(key);
            String id = new Crypto().Decrypt(idU);
            if(repositorio.VerifyRol(id) == 2){
                return ResponseEntity.badRequest().body(new message("Un estudiante no puede publicar en una clase"));
            }
            repositorio.Post(idC, id, file, text);
            return ResponseEntity.status(200).body(new message("Publicacion realizada con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // lista de publicaciones de una clase

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/class/post")
    public ResponseEntity GetPost(@CookieValue("class") String key){
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.PostList(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    } 
 
}
