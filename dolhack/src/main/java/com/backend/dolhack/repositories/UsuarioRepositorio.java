package com.backend.dolhack.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.lib.Hash;
import com.backend.dolhack.lib.IDRandom;
import com.backend.dolhack.models.user.ModelCorreo;
import com.backend.dolhack.models.user.ModelUsuario;
import com.backend.dolhack.models.user.loginUserModel;
import com.backend.dolhack.models.user.newUserModel;
import com.backend.dolhack.models.user.profileUserModel;
import com.backend.dolhack.service.cloudinaryService;

@Repository
public class UsuarioRepositorio {
    private final JdbcTemplate sql;
    private final cloudinaryService cloudinary;

    @Autowired
    public UsuarioRepositorio(JdbcTemplate sql, cloudinaryService cloudinary){
        this.sql = sql;
        this.cloudinary = cloudinary;
    }
    
    public String newUser(newUserModel user) throws Exception{
        String id = new IDRandom().generateID();
        String contrasena = new Hash().generateHash(user.getContraseña());

        sql.update("INSERT INTO usuario (idusuario, nombre, contraseña, rol_idrol) values (?, ?, ?, ?)",id, user.getNombre(), contrasena, user.getRol());
        sql.update("INSERT INTO correo (idcorreo, correo, usuario_idusuario) values (?, ?, ?)", new IDRandom().generateID(), user.getCorreo(), id);

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

        String foto = cloudinary.uploadImage(file);

        String querry = "UPDATE usuario SET biografia = ? , foto = ? WHERE idusuario = ?";

        sql.update(querry,biografia, foto,id);
        
        return true;
    }

    public profileUserModel findProfile(String idEncryp)throws Exception {
        String id = new Crypto().Decrypt(idEncryp);

        String querry = "SELECT usuario.nombre, usuario.apellido, usuario.biografia, usuario.foto, usuario.banner, correo.correo, rol.rol FROM usuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario JOIN rol ON rol.idrol = usuario.rol_idrol WHERE usuario.idusuario = ?";

        profileUserModel profile = sql.queryForObject(querry,new Object[]{id}, BeanPropertyRowMapper.newInstance(profileUserModel.class));

        return profile;
    }
}
