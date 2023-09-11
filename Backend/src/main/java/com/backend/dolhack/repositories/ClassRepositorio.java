package com.backend.dolhack.repositories;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.lib.IDRandom;
import com.backend.dolhack.models.classs.ModelLista;
import com.backend.dolhack.models.classs.classListModel;
import com.backend.dolhack.models.classs.newClassModel;
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

    public classListModel infoClass(String id){
        String query = "SELECT clase.idclase, clase.titulo, clase.descripcion, clase.fecha_inicio, clase.fecha_finalizacion, tipo.nombretipo, nivel.nombrenivel, clase.imagen, usuario.foto FROM clase JOIN tipo ON tipo.idtipo = clase.tipo_idtipo JOIN nivel ON nivel.idnivel = clase.nivel_idnivel JOIN usuario ON usuario.idusuario = clase.usuario_idusuario WHERE idclase = ?";
        return sql.queryForObject(query, new Object[]{id} , BeanPropertyRowMapper.newInstance(classListModel.class) );
    }

}
