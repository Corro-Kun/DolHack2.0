package com.backend.dolhack.controllers;

import com.backend.dolhack.middlewares.VerificCookie;
import com.backend.dolhack.models.message;
import com.backend.dolhack.models.token;
import com.backend.dolhack.models.user.loginUserModel;
import com.backend.dolhack.models.user.newUserModel;
import com.backend.dolhack.models.user.updateUserModel;
import com.backend.dolhack.repositories.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class auth {
    private final UsuarioRepositorio repositorio;

    @Autowired
    public auth(UsuarioRepositorio repositorio){
        this.repositorio = repositorio;
    } 

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody newUserModel user) throws Exception{
        try {
            String value = repositorio.newUser(user);

            token message = new token(value);

            return ResponseEntity.ok().body(message);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody loginUserModel user )throws Exception{
        try{
            String data = repositorio.findUser(user);

            if(data.equals("404")){
                return ResponseEntity.status(404).body(new message("usuario no encontrado"));
            }else if (data.equals("401")) {
                return ResponseEntity.status(401).body(new message("contraseña incorrecta"));                
            }

            return ResponseEntity.ok().body(new token(data));
        }catch(Exception e){
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @PostMapping("/complet")
    public ResponseEntity<message> complet(@RequestPart("file") MultipartFile file, @RequestPart("biografia") String biografia, @RequestHeader(name="token",required=true) String token){
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

    @GetMapping("/profile")
    public ResponseEntity profile(@RequestHeader(name="token",required=true) String token ){
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("no autorizado"));
            }
            return ResponseEntity.ok().body(repositorio.findProfile(token));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @GetMapping("/valid")
    public ResponseEntity valid(@RequestHeader(name="token",required = true) String token ){
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("0"));
            }
            return ResponseEntity.ok().body(new message("1"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }

    @PostMapping("/update")
    public ResponseEntity<message> update(@RequestHeader(name="token",required=true) String token,@RequestPart("nombre") String nombre, @RequestPart("apellido") String apellido, @RequestPart("biografia") String biografia ,@RequestPart(name="foto", required=false) MultipartFile foto,@RequestPart(name="telefono", required=false) String telefono , @RequestPart(name="banner", required=false) MultipartFile banner) throws Exception {
        try {
            if (new VerificCookie(repositorio).verificCookie(token) == false) {
                return ResponseEntity.status(401).body(new message("no autorizado"));
            }
            updateUserModel user = new updateUserModel(nombre, apellido, biografia, telefono);
            if(repositorio.UpdateCompletProfile(token, foto, banner, user)){
                return ResponseEntity.ok().body(new message("Usuario actualizado con exito"));
            }
            return ResponseEntity.badRequest().body(new message("Error al actualizar usuario"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
 
    @GetMapping("path")
    public ResponseEntity dataComplet(){
        try{

        }catch(Exception e){
            return ResponseEntity.badRequest().body(new message(e.getMessage()));
        }
    }
    
}
