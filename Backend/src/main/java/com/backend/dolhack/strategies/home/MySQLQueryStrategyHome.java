package com.backend.dolhack.strategies.home;

import com.backend.dolhack.models.classs.classListModel;
import com.backend.dolhack.models.home.ListPeople;
import com.backend.dolhack.models.home.MainModel;
import com.backend.dolhack.models.home.ModelNotificacion;
import com.backend.dolhack.models.home.userListModel;
import com.backend.dolhack.models.user.ModelUsuario;
import com.backend.dolhack.strategies.interfaces.QueryStrategyHome;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class MySQLQueryStrategyHome implements QueryStrategyHome {
    @Override
    public List<userListModel> UserListQuery(JdbcTemplate sql, String rol){
        String querry = "SELECT usuario.idusuario,usuario.nombre, usuario.apellido, usuario.biografia, usuario.foto, usuario.banner, correo.correo, rol.rol FROM usuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario JOIN rol ON rol.idrol = usuario.rol_idrol WHERE rol.rol = '"+ rol +"' LIMIT 9";
        return sql.query(querry, (rs, rowNum) -> new userListModel(rs.getString("nombre"), rs.getString("apellido"), rs.getString("biografia"), rs.getString("foto"), rs.getString("banner"), rs.getString("rol"), rs.getString("correo"), rs.getString("idusuario")));
    }

    @Override
    public List<ListPeople> ListQuery(JdbcTemplate sql, String id){
        String querry = "SELECT * FROM usuario WHERE idusuario = ?";
        ModelUsuario usuario = sql.queryForObject(querry, new Object[]{id}, (rs, rowNum) -> new ModelUsuario(rs.getString("idusuario"), rs.getString("nombre"), rs.getString("apellido"), rs.getString("contraseña"), rs.getString("biografia"), rs.getString("foto"), rs.getString("banner"), rs.getInt("rol_idrol")));
        if(usuario.getRol_idrol() == 1){
            String querry2 = "select lista_has_usuario.usuario_idusuario, usuario.nombre, usuario.foto,usuario.apellido, usuario.banner, clase.titulo, usuario.rol_idrol from lista_has_usuario JOIN lista ON lista.idlista = lista_has_usuario.lista_idlista JOIN clase ON lista.idlista = clase.lista_idlista JOIN usuario ON usuario.idusuario = lista_has_usuario.usuario_idusuario WHERE clase.usuario_idusuario = ? ;";
            return sql.query(querry2, new Object[]{id}, (rs, rowNum) -> new ListPeople(rs.getString("usuario_idusuario"), rs.getString("nombre"), rs.getString("apellido"), rs.getString("foto"), rs.getString("banner"), rs.getString("titulo"), rs.getInt("rol_idrol")));
        }
        String querry3 = "select usuario.idusuario, usuario.nombre, usuario.foto,usuario.apellido, usuario.banner, clase.titulo, usuario.rol_idrol from lista_has_usuario JOIN lista ON lista.idlista = lista_has_usuario.lista_idlista JOIN clase ON lista.idlista = clase.lista_idlista JOIN usuario ON usuario.idusuario = clase.usuario_idusuario WHERE lista_has_usuario.usuario_idusuario = ? ;";
        return sql.query(querry3, new Object[]{id}, (rs, rowNum) -> new ListPeople(rs.getString("idusuario"), rs.getString("nombre"), rs.getString("apellido"), rs.getString("foto"), rs.getString("banner"), rs.getString("titulo"), rs.getInt("rol_idrol")));
     }

    @Override
    public MainModel MainQuery(JdbcTemplate sql){
        String querry = "SELECT usuario.idusuario,usuario.nombre, usuario.apellido, usuario.biografia, usuario.foto, usuario.banner, correo.correo, rol.rol FROM usuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario JOIN rol ON rol.idrol = usuario.rol_idrol WHERE usuario.rol_idrol = 1 LIMIT 3;";
        List<userListModel> profesor = sql.query(querry, (rs, rowNum) -> new userListModel(rs.getString("nombre"), rs.getString("apellido"), rs.getString("biografia"), rs.getString("foto"), rs.getString("banner"), rs.getString("rol"), rs.getString("correo"), rs.getString("idusuario")));
        String querry2 = "SELECT clase.idclase, clase.titulo, clase.descripcion, clase.fecha_inicio, clase.fecha_finalizacion, tipo.nombretipo, nivel.nombrenivel, clase.imagen, usuario.foto FROM clase JOIN tipo ON tipo.idtipo = clase.tipo_idtipo JOIN nivel ON nivel.idnivel = clase.nivel_idnivel JOIN usuario ON usuario.idusuario = clase.usuario_idusuario JOIN estado_clase ON estado_clase.clase_idclase = clase.idclase where estado_clase.estado_clase = 1 LIMIT 2;";
        List<classListModel> clase = sql.query(querry2, BeanPropertyRowMapper.newInstance(classListModel.class));

        return new MainModel(profesor, clase);
    }

    @Override
    public List<ModelNotificacion> NotificacionQuery(JdbcTemplate sql, String id){
        String querry = "SELECT * FROM notificacion WHERE usuario_idusuario = ?";
        return sql.query(querry, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelNotificacion.class));
    }

    @Override
    public boolean deleteNotifications(JdbcTemplate sql, String id){
        String querry = "DELETE FROM notificacion WHERE usuario_idusuario = ?";
        return sql.update(querry, id) > 0;
    }

    @Override
    public int countNotifications(JdbcTemplate sql, String id){
        String querry = "SELECT COUNT(*) FROM notificacion WHERE usuario_idusuario = ?";
        return sql.queryForObject(querry, new Object[]{id}, Integer.class);
    }
}