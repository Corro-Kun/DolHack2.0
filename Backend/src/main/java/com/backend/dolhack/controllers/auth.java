package com.backend.dolhack.controllers;

import com.backend.dolhack.middlewares.VerificCookie;
import com.backend.dolhack.models.message;
import com.backend.dolhack.models.user.loginUserModel;
import com.backend.dolhack.models.user.newUserModel;
import com.backend.dolhack.models.user.updateUserModel;
import com.backend.dolhack.repositories.UsuarioRepositorio;
import java.time.Duration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpCookie;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/auth")
public class auth {
    private final UsuarioRepositorio repositorio;

    @Autowired
    public auth(UsuarioRepositorio repositorio){
        this.repositorio = repositorio;
    } 

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
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

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
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

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/complet")
    public ResponseEntity<message> complet(@RequestPart("file") MultipartFile file, @RequestPart("biografia") String biografia, @CookieValue(name="token",required=true) String token){
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("no autorizado"));
            }
            repositorio.updateProfile(token, biografia, file);

            return ResponseEntity.ok().body(new message("perfil actualizado"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));            
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @GetMapping("/profile")
    public ResponseEntity profile(@CookieValue(name="token",required=true) String token ){
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("no autorizado"));
            }
            return ResponseEntity.ok().body(repositorio.findProfile(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins="http://localhost:5173", allowCredentials = "true")
    @GetMapping("/valid")
    public ResponseEntity valid(@CookieValue(name="token",required = true) String token ){
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("0"));
            }
            return ResponseEntity.ok().body(new message("1"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
    @PostMapping("/update")
    public ResponseEntity<message> update(@CookieValue(name="token",required=true) String token,@RequestPart("nombre") String nombre, @RequestPart("apellido") String apellido, @RequestPart("biografia") String biografia ,@RequestPart(name="foto", required=false) MultipartFile foto, @RequestPart(name="banner", required=false) MultipartFile banner) throws Exception {
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("no autorizado"));
            }
            updateUserModel user = new updateUserModel(nombre, apellido, biografia, "");
            if(repositorio.UpdateCompletProfile(token, foto, banner, user)){
                return ResponseEntity.ok().body(new message("Usuario actualizado con exito"));
            }
            return ResponseEntity.badRequest().body(new message("Error al actualizar usuario"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
}
