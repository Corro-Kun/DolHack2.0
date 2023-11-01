package com.backend.dolhack.repositories;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.lib.Hash;
import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.user.*;
import com.backend.dolhack.service.cloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Repository
public class UsuarioRepositorio {
    private final JdbcTemplate sql;
    private final cloudinaryService cloudinary;
    private final IDRandomFactory idRandom;

    @Autowired
    public UsuarioRepositorio(JdbcTemplate sql, cloudinaryService cloudinary, IDRandomFactory idRandom){
        this.sql = sql;
        this.cloudinary = cloudinary;
        this.idRandom = idRandom;
    }
    
    public String newUser(newUserModel user) throws Exception{
        String id = idRandom.generateID();
        String contrasena = new Hash().generateHash(user.getContraseña());

        sql.update("INSERT INTO usuario (idusuario, nombre, contraseña, rol_idrol) values (?, ?, ?, ?)",id, user.getNombre(), contrasena, user.getRol());
        sql.update("INSERT INTO correo (idcorreo, correo, usuario_idusuario) values (?, ?, ?)", idRandom.generateID(), user.getCorreo(), id);

        String key = new Crypto().Encrypt(id);

        return key;
    }

    public String findUser(loginUserModel user)throws Exception{
        ModelCorreo correo = sql.queryForObject("SELECT * FROM correo WHERE correo = ? ", new Object[]{user.getCorreo()}, BeanPropertyRowMapper.newInstance(ModelCorreo.class));

        if(correo == null){
            return "404";
        }

        ModelUsuario usuario = sql.queryForObject("SELECT * FROM usuario WHERE idusuario = ?", new Object[]{correo.getUsuario_idusuario()}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        boolean valid = new Hash().compareHash(user.getContraseña(), usuario.getContraseña());

        if(!valid){
            return "401";
        }

        String id = new Crypto().Encrypt(usuario.getIdusuario());

        return id;
    }

    public boolean updateProfile(String idEncryp, String biografia, MultipartFile file)throws Exception {
        String id = new Crypto().Decrypt(idEncryp);

        String foto = cloudinary.uploadImage(file, "perfil");

        String querry = "UPDATE usuario SET biografia = ? , foto = ? WHERE idusuario = ?";

        sql.update(querry,biografia, foto,id);
        
        return true;
    }

    public profileUserModel findProfile(String idEncryp)throws Exception {
        String id = new Crypto().Decrypt(idEncryp);

        String querry = "SELECT usuario.nombre, usuario.apellido, usuario.biografia, usuario.foto, usuario.banner, correo.correo, rol.rol FROM usuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario JOIN rol ON rol.idrol = usuario.rol_idrol WHERE usuario.idusuario = ?";

        profileUserModel profile = sql.queryForObject(querry,new Object[]{id}, BeanPropertyRowMapper.newInstance(profileUserModel.class));

        ModelTelefono telefono = sql.queryForObject("SELECT * FROM telefono WHERE usuario_idusuario = ?", new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelTelefono.class));

        profile.setTelefono(telefono.getTelefono());

        return profile;
    }

    public boolean ValidUser(String key)throws Exception {
        String id = new Crypto().Decrypt(key);

        String querry = "SELECT * FROM usuario WHERE idusuario = ?";

        ModelUsuario user = sql.queryForObject(querry, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));

        if(user.getIdusuario() == null){
            return false;
        }
            
        return true;
    }
    
    public boolean UpdateCompletProfile(String idEncryp, MultipartFile foto, MultipartFile banner, updateUserModel user) throws Exception {
        String id = new Crypto().Decrypt(idEncryp);
        String fotoP = null ;
        String fotoB = null ;
    
        if (foto != null && !foto.isEmpty()) { 
            fotoP = cloudinary.uploadImage(foto, "perfil");
        }

        if (banner != null && !banner.isEmpty()) { 
            fotoB = cloudinary.uploadImage(banner, "banner");
        }

        if(fotoP == null && fotoB == null) {
            String querry = "UPDATE usuario SET nombre = ?, apellido = ?, biografia = ? WHERE idusuario = ?";

            sql.update(querry, user.getNombre(), user.getApellido(), user.getBiografia(), id);         
        }else if (fotoP == null && fotoB != null){
            String querry = "UPDATE usuario SET nombre = ?, apellido = ?, biografia = ?, banner = ? WHERE idusuario = ?";

            sql.update(querry, user.getNombre(), user.getApellido(), user.getBiografia(), fotoB, id);
        }else if (fotoP != null && fotoB == null){
            String querry = "UPDATE usuario SET nombre = ?, apellido = ?, biografia = ?, foto = ? WHERE idusuario = ?";

            sql.update(querry, user.getNombre(), user.getApellido(), user.getBiografia(), fotoP, id);
        }else{
            String querry = "UPDATE usuario SET nombre = ?, apellido = ?, biografia = ?, foto = ?, banner = ? WHERE idusuario = ?";

            sql.update(querry, user.getNombre(), user.getApellido(), user.getBiografia(), fotoP, fotoB, id);
        }

        List<ModelTelefono> telefonos = sql.query("select * from telefono WHERE usuario_idusuario = ?;", new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelTelefono.class));

        if(telefonos.isEmpty()){
            String idT = idRandom.generateID();

            sql.update("INSERT INTO telefono (idtelefono, telefono, usuario_idusuario) values (?, ?, ?)", idT, user.getTelefono(), id);
        }else{
            String querry = "UPDATE telefono SET telefono = ? WHERE usuario_idusuario = ?";

            sql.update(querry, user.getTelefono(), id);
        }

        return true;
    }
}
