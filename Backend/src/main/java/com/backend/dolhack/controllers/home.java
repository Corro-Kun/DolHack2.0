package com.backend.dolhack.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.models.message;
import com.backend.dolhack.repositories.HomeRepositorio;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/home")
@RestController
public class home {

    private final HomeRepositorio repositorio;

    @Autowired
    public home(HomeRepositorio repositorio){
        this.repositorio = repositorio;
    }

    // lista de profesores

    @GetMapping("/teacher")
    public ResponseEntity profesor() throws Exception {
        try {
            return ResponseEntity.ok().body(repositorio.getUserList("profesor"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    // lista de estudiantes

    @GetMapping("/student")
    public ResponseEntity estudiante(){
        try {
            return ResponseEntity.ok().body(repositorio.getUserList("estudiante"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    //

    @GetMapping("/peopleList")
    public ResponseEntity yourList(@RequestHeader("token") String id){
        try {
            String idU = new Crypto().Decrypt(id);
            return ResponseEntity.ok().body(repositorio.getList(idU));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    //

    @GetMapping("/main")
    public ResponseEntity Main(){
        try {
            return ResponseEntity.ok().body(repositorio.Main());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @GetMapping("/notification")
    public ResponseEntity getMethodName(@RequestHeader("token") String id) {
        try {
            String idU = new Crypto().Decrypt(id);
            return ResponseEntity.ok().body(repositorio.Notificacion(idU));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }        
    }
    
    @DeleteMapping("/notifications")
    public ResponseEntity deleteNotificationss(@RequestHeader("token") String id) {
        try {
            String idU = new Crypto().Decrypt(id);
            if (repositorio.deleteNotifications(idU)){
                return ResponseEntity.ok().body(new message("Notificaciones eliminadas"));
            }
            return ResponseEntity.badRequest().body(new message("No se pudo eliminar las notificaciones"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }        
    }

    @GetMapping("/countNotifications")
    public ResponseEntity countNotifications(@RequestHeader("token") String id) {
        try {
            String idU = new Crypto().Decrypt(id);
            return ResponseEntity.ok().body(repositorio.countNotifications(idU));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }        
    }
 
}
