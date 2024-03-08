package com.backend.dolhack.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.models.classs.UpdateClass;
import com.backend.dolhack.models.classs.newClassModel;
import com.backend.dolhack.models.message;
import com.backend.dolhack.models.token;
import com.backend.dolhack.repositories.ClassRepositorio;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class classD {
    private final ClassRepositorio repositorio;

    @Autowired
    public classD(ClassRepositorio repositorio){
        this.repositorio = repositorio;
    } 

    // Crear una clase

    @PostMapping("/class")
    public ResponseEntity<message> CreateClass(@RequestHeader("token") String token, @RequestPart("file") MultipartFile file, @RequestPart("titulo") String titulo, @RequestPart("descripcion") String descripcion, @RequestPart("fecha_inicio") String fecha_inicio, @RequestPart("fecha_finalizacion") String fecha_finalizacion, @RequestPart("tipo") String tipo, @RequestPart("nivel") String nivel) throws Exception {
        try {
            newClassModel clase = new newClassModel(titulo, descripcion, fecha_inicio, fecha_finalizacion, tipo, nivel);
            repositorio.newClass(clase, token, file);
            return ResponseEntity.ok().body(new message("Clase creada con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // Listas de clases

    @GetMapping("/class")
    public ResponseEntity ListClass(){
        try {
            return  ResponseEntity.status(200).body(repositorio.listClass());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // Informacion de una clase

    @PostMapping("/class/{id}")
    public ResponseEntity classData(@PathVariable String id){
        try {
            return ResponseEntity.status(200).body(repositorio.infoClass(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
    // lista de las clases de un usuario

    @GetMapping("/yourclass")
    public ResponseEntity YourClass(@RequestHeader("token") String token){
        try {
            return ResponseEntity.status(200).body(repositorio.listClassUser(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // entrar a una clase

    @GetMapping("/enter/class/{id}")
    public ResponseEntity enterClass(@PathVariable String id) throws  Exception {
        try {
            String value = new Crypto().Encrypt(id);
            if(repositorio.VerifyClassD(id) == false){
                return ResponseEntity.badRequest().body(new message("La clase no existe"));
            }
                            
            return ResponseEntity.ok().body(new token(value)); 

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
    // modificar una clase

    @PutMapping("/class")
    public ResponseEntity modifyClass(@RequestHeader("class") String id, @RequestBody UpdateClass clase, @RequestHeader("token") String idU) throws Exception {
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

    @GetMapping("/class/form")
    public ResponseEntity classForm(@RequestHeader("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.infoClass(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }        

    // eliminar una clase

    @DeleteMapping("/class")
    public ResponseEntity deleteClass(@RequestHeader("class") String key, @RequestHeader("token") String idU) throws Exception {
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

    @GetMapping("/class/verify")
    public ResponseEntity verifyClass(@RequestHeader("class") String key, @RequestHeader("token") String key2) throws Exception {
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

    @GetMapping("/class/register/{id}")
    public ResponseEntity StudentRegister(@RequestHeader("token") String key , @PathVariable String id) throws Exception {
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

    @DeleteMapping("/class/unregister")
    public ResponseEntity StudentUnRegister(@RequestHeader("token") String key , @RequestHeader("class") String id) throws Exception {
        try {
            String idU = new Crypto().Decrypt(key);
            String idC = new Crypto().Decrypt(id);
            if(repositorio.VerifyClassD(idC) == false){
                return ResponseEntity.badRequest().body(new message("La clase no existe"));
            }
            if(repositorio.VerifyRol(idU) == 1){
                return ResponseEntity.badRequest().body(new message("Un profesor no puede desregistrarse de una clase"));
            }
            boolean valid = repositorio.UnRegisterStudent(idU, idC);

            if(valid == false){
                return ResponseEntity.badRequest().body(new message("No estas registrado en esta clase"));
            }

            return ResponseEntity.status(200).body(new message("Estudiante desregistrado con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
     
    // lista de estudiantes registrados en una clase

    @GetMapping("/class/student")
    public ResponseEntity StuentList(@RequestHeader("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.StudentListC(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // Publicar en la clase

    @PostMapping("/class/post")
    public ResponseEntity PostClass(@RequestHeader("class") String key, @RequestHeader("token") String idU ,@RequestPart(name="file", required=false) MultipartFile file, @RequestPart(name="post", required=true) String text ) throws Exception {
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

    @GetMapping("/class/post")
    public ResponseEntity GetPost(@RequestHeader("class") String key){
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.PostList(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    } 

    // lista de calificaciones de la clase

    @GetMapping("/qualification")
    public ResponseEntity ListQualification(@RequestHeader("class") String key) throws Exception {
        try {
            String idC = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.getQualification(idC));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // calificaciones del estudiante en la clase

    @GetMapping("/qualification/student")
    public ResponseEntity StudentQualificatio(@RequestHeader("class") String key , @RequestHeader("token") String token) throws Exception {
        try {
            String idC = new Crypto().Decrypt(key);
            String idU = new Crypto().Decrypt(token);
            return ResponseEntity.status(200).body(repositorio.studentQualification(idU, idC));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }        
    }

    // informacion de la clase para estudiantes

    @GetMapping("/nameclass")
    public ResponseEntity NameClass(@RequestHeader("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.getClass(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // estado de la clase

    @GetMapping("/stateclass")
    public ResponseEntity StateClass(@RequestHeader("class") String key) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            return ResponseEntity.status(200).body(repositorio.VerficStateClase(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // cambiar el estado de la clase

    @PutMapping("/stateclass/{state}")
    public ResponseEntity ChangeStateClass(@RequestHeader("class") String key, @PathVariable int state ) throws Exception {
        try {
            String id = new Crypto().Decrypt(key);
            repositorio.ChagerStateClass(id, state);
            return ResponseEntity.status(200).body(new message("Estado de la clase cambiado con exito"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
     
}
