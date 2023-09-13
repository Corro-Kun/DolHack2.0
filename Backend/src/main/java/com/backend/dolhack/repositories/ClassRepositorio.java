package com.backend.dolhack.repositories;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.lib.IDRandom;
import com.backend.dolhack.models.classs.InfoClassModel;
import com.backend.dolhack.models.classs.ListClassUser;
import com.backend.dolhack.models.classs.ModelClase;
import com.backend.dolhack.models.classs.ModelLista;
import com.backend.dolhack.models.classs.UpdateClass;
import com.backend.dolhack.models.classs.classListModel;
import com.backend.dolhack.models.classs.newClassModel;
import com.backend.dolhack.models.user.ModelUsuario;
import com.backend.dolhack.service.cloudinaryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

@Repository
public class ClassRepositorio {
    private final JdbcTemplate sql;
    private final cloudinaryService cloudinary;
 
    @Autowired
    public ClassRepositorio(JdbcTemplate sql, cloudinaryService cloudinary){
        this.sql = sql;
        this.cloudinary = cloudinary;
    }
    
    public boolean newClass(newClassModel clase, String key, MultipartFile file) throws Exception{
        String idUser = new Crypto().Decrypt(key);
        String id = new IDRandom().generateID();

        sql.update("INSERT INTO lista(clase) values(?)", id );

        ModelLista lis = sql.queryForObject("SELECT * FROM lista WHERE clase = ?", new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelLista.class));

        String url = cloudinary.uploadImage(file, "clase");
 
        String query = "INSERT INTO clase( idclase ,titulo, descripcion, fecha_inicio, fecha_finalizacion, tipo_idtipo, nivel_idnivel, lista_idlista, usuario_idusuario, imagen) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        sql.update(query, id ,clase.getTitulo(), clase.getDescripcion(), clase.getFecha_inicio(), clase.getFecha_finalizacion(), clase.getTipo(), clase.getNivel(), lis.getIdlista(), idUser, url);

        return true;
    }

    public List<classListModel> listClass(){
        String query = "SELECT clase.idclase, clase.titulo, clase.descripcion, clase.fecha_inicio, clase.fecha_finalizacion, tipo.nombretipo, nivel.nombrenivel, clase.imagen, usuario.foto FROM clase JOIN tipo ON tipo.idtipo = clase.tipo_idtipo JOIN nivel ON nivel.idnivel = clase.nivel_idnivel JOIN usuario ON usuario.idusuario = clase.usuario_idusuario";
        return sql.query(query, BeanPropertyRowMapper.newInstance(classListModel.class));
    }

    public InfoClassModel infoClass(String id){
        String query = "SELECT clase.idclase, clase.titulo, clase.descripcion, clase.fecha_inicio, clase.fecha_finalizacion, tipo.nombretipo, nivel.nombrenivel, clase.imagen, usuario.foto, usuario.nombre, usuario.apellido, correo.correo FROM clase JOIN tipo ON tipo.idtipo = clase.tipo_idtipo JOIN nivel ON nivel.idnivel = clase.nivel_idnivel JOIN usuario ON usuario.idusuario = clase.usuario_idusuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario  WHERE idclase = ?";
        return sql.queryForObject(query, new Object[]{id} , BeanPropertyRowMapper.newInstance(InfoClassModel.class));
    }

    public List<ListClassUser> listClassUser(String key) throws Exception{
        String idUser = new Crypto().Decrypt(key);
        String query = "SELECT clase.idclase, clase.titulo, clase.imagen FROM clase JOIN usuario ON usuario.idusuario = clase.usuario_idusuario WHERE usuario.idusuario = ?";
        return sql.query(query, new Object[]{idUser}, BeanPropertyRowMapper.newInstance(ListClassUser.class));
    }

    public boolean UpdateClassP(String key, UpdateClass clase) throws Exception{
        String id = new Crypto().Decrypt(key);

        String query = "UPDATE clase SET titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_finalizacion = ?, tipo_idtipo = ?, nivel_idnivel = ? WHERE idclase = ? ";

        sql.update(query, clase.getTitulo(), clase.getDescripcion(), clase.getFecha_inicio(), clase.getFecha_finalizacion(), clase.getTipo_idtipo(), clase.getNivel_idnivel(), id);

        return true;
    }

    public boolean DeleteClass(String id ) throws Exception{
        String Querry1 = "Select * FROM lista WHERE clase = ?";
        ModelLista lista = sql.queryForObject(Querry1, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelLista.class));
        sql.update("DELETE FROM clase WHERE idclase = ?", id);
        sql.update("DELETE FROM lista_has_usuario WHERE lista_idlista = ?", lista.getIdlista());
        sql.update("DELETE FROM lista WHERE clase = ?", id);
        return true;
    }

    public int  VerifyRol(String id){
        String query = "SELECT * FROM usuario WHERE idusuario = ?";
        ModelUsuario user =  sql.queryForObject(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        return user.getRol_idrol();
    }

    public boolean  VerifyClassD(String id){
        String query = "SELECT * FROM clase WHERE idclase = ?";
        ModelClase clase =  sql.queryForObject(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelClase.class));
        if(clase.getIdclase().equals(id) ){
            return true;
        }else{
            return false;
        }
    }
}
