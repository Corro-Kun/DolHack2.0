package com.backend.dolhack.repositories;

import com.backend.dolhack.models.home.userListModel;
import com.backend.dolhack.service.cloudinaryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class HomeRepositorio {
    private final JdbcTemplate sql;
    private final cloudinaryService cloudinary;
 
    @Autowired
    public HomeRepositorio(JdbcTemplate sql, cloudinaryService cloudinary){
        this.sql = sql;
        this.cloudinary = cloudinary;
    }
 
    public List<userListModel> getUserList(String rol){
        String querry = "SELECT usuario.idusuario,usuario.nombre, usuario.apellido, usuario.biografia, usuario.foto, usuario.banner, correo.correo, rol.rol FROM usuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario JOIN rol ON rol.idrol = usuario.rol_idrol WHERE rol.rol = '"+ rol +"' LIMIT 9";
        return sql.query(querry, (rs, rowNum) -> new userListModel(rs.getString("nombre"), rs.getString("apellido"), rs.getString("biografia"), rs.getString("foto"), rs.getString("banner"), rs.getString("rol"), rs.getString("correo"), rs.getString("idusuario")));
    }

}
