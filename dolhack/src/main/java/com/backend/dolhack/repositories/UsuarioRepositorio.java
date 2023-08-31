package com.backend.dolhack.repositories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.lib.Hash;
import com.backend.dolhack.lib.IDRandom;
import com.backend.dolhack.models.user.newUserModel;

@Repository
public class UsuarioRepositorio {
    private final JdbcTemplate sql;

    @Autowired
    public UsuarioRepositorio(JdbcTemplate sql){
        this.sql = sql;
    }
    
    public String newUser(newUserModel user) throws Exception{
        String id = new IDRandom().generateID();
        String contrasena = new Hash().generateHash(user.getContrasena());

        sql.update("INSERT INTO usuario (idusuario, nombre, contraseña, rol_idrol) values (?, ?, ?, ?)",id, user.getNombre(), contrasena, user.getRol());
        sql.update("INSERT INTO correo (idcorreo, correo, usuario_idusuario) values (?, ?, ?)", new IDRandom().generateID(), user.getCorreo(), id);

        String key = new Crypto().Encrypt(id);

        return key;
    }
}
