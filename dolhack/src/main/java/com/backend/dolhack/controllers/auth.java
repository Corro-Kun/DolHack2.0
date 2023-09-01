package com.backend.dolhack.controllers;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpCookie;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.dolhack.models.message;
import com.backend.dolhack.models.user.loginUserModel;
import com.backend.dolhack.models.user.newUserModel;
import com.backend.dolhack.repositories.UsuarioRepositorio;

@RestController
@RequestMapping("/auth")
public class auth {
    private final UsuarioRepositorio repositorio;

    @Autowired
    public auth(UsuarioRepositorio repositorio){
        this.repositorio = repositorio;
    } 

    @PostMapping("/register")
    public ResponseEntity<message> register(@RequestBody newUserModel user) throws Exception{
        try {
            String value = repositorio.newUser(user);

            HttpCookie cookie = ResponseCookie.from("token", value)
                .maxAge(Duration.ofDays(1))
                .secure(true)
                .path("/")
                .sameSite("none")
                .build();

            message message = new message("Usuario registrado con exito");

            return ResponseEntity.ok().header("set-cookie", cookie.toString()).body(message);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<message> login(@RequestBody loginUserModel user )throws Exception{
        try{
            String data = repositorio.findUser(user);
            if(data.equals("404")){
                return ResponseEntity.status(404).body(new message("usuario no encontrado"));
            }else if (data.equals("401")) {
                return ResponseEntity.status(401).body(new message("contraseña incorrecta"));                
            }

            HttpCookie cookie = ResponseCookie.from("token", data)
                .maxAge(Duration.ofDays(1))
                .secure(true)
                .path("/")
                .sameSite("none")
                .build();

            return ResponseEntity.ok().header("set-cookie", cookie.toString()).body(new message("Bienvenido "+user.getCorreo()));
        }catch(Exception e){
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
    
    @GetMapping("/profile")
    public ResponseEntity profile(@CookieValue(name="token",required=true) String token ){
        try {
            return ResponseEntity.ok().body(repositorio.findProfile(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
}
