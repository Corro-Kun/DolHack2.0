package com.backend.dolhack.strategies;

import com.backend.dolhack.lib.Crypto;
import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.classs.*;
import com.backend.dolhack.models.user.ModelUsuario;
import com.backend.dolhack.service.cloudinaryService;
import com.backend.dolhack.strategies.interfaces.QueryStrategyClass;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public class MySQLQueryStrategyClass implements QueryStrategyClass {
    @Override
    public boolean newClassQuery(IDRandomFactory IDRandom , JdbcTemplate sql, cloudinaryService cloudinary , newClassModel clase, String key, MultipartFile file)throws Exception{
        String idUser = new Crypto().Decrypt(key);
        String id = IDRandom.generateID();

        sql.update("INSERT INTO lista(clase) values(?)", id );

        ModelLista lis = sql.queryForObject("SELECT * FROM lista WHERE clase = ?", new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelLista.class));

        String url = cloudinary.uploadImage(file, "clase");

        String query = "INSERT INTO clase( idclase ,titulo, descripcion, fecha_inicio, fecha_finalizacion, tipo_idtipo, nivel_idnivel, lista_idlista, usuario_idusuario, imagen) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        sql.update(query, id ,clase.getTitulo(), clase.getDescripcion(), clase.getFecha_inicio(), clase.getFecha_finalizacion(), clase.getTipo(), clase.getNivel(), lis.getIdlista(), idUser, url);

        return true;
    }

    @Override
    public List<classListModel> listClassQuery(JdbcTemplate sql){
        String query = "SELECT clase.idclase, clase.titulo, clase.descripcion, clase.fecha_inicio, clase.fecha_finalizacion, tipo.nombretipo, nivel.nombrenivel, clase.imagen, usuario.foto FROM clase JOIN tipo ON tipo.idtipo = clase.tipo_idtipo JOIN nivel ON nivel.idnivel = clase.nivel_idnivel JOIN usuario ON usuario.idusuario = clase.usuario_idusuario";
        return sql.query(query, BeanPropertyRowMapper.newInstance(classListModel.class));
    }

    @Override
    public InfoClassModel infoClassQuery(JdbcTemplate sql, String id){
        String query = "SELECT clase.idclase, clase.titulo, clase.descripcion, clase.fecha_inicio, clase.fecha_finalizacion, tipo.nombretipo, nivel.nombrenivel, clase.imagen, usuario.foto, usuario.nombre, usuario.apellido, correo.correo FROM clase JOIN tipo ON tipo.idtipo = clase.tipo_idtipo JOIN nivel ON nivel.idnivel = clase.nivel_idnivel JOIN usuario ON usuario.idusuario = clase.usuario_idusuario JOIN correo ON correo.usuario_idusuario = usuario.idusuario  WHERE idclase = ?";
        return sql.queryForObject(query, new Object[]{id} , BeanPropertyRowMapper.newInstance(InfoClassModel.class));
    }

    @Override
    public List<ListClassUser> listClassUserQuery(JdbcTemplate sql,String key) throws Exception{
        String idUser = new Crypto().Decrypt(key);
        ModelUsuario user = sql.queryForObject("SELECT * FROM usuario WHERE idusuario = ?", new Object[]{idUser}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        if (user.getRol_idrol() == 1) {
            String query = "SELECT clase.idclase, clase.titulo, clase.imagen FROM clase JOIN usuario ON usuario.idusuario = clase.usuario_idusuario WHERE usuario.idusuario = ?";
            return sql.query(query, new Object[]{idUser}, BeanPropertyRowMapper.newInstance(ListClassUser.class));
        }else{
            String query = "select clase.idclase, clase.titulo, clase.imagen from lista_has_usuario JOIN lista ON lista.idlista = lista_has_usuario.lista_idlista JOIN clase ON lista.idlista = clase.lista_idlista JOIN usuario ON usuario.idusuario = lista_has_usuario.usuario_idusuario where usuario.idusuario = ? ;";
            return sql.query(query, new Object[]{idUser}, BeanPropertyRowMapper.newInstance(ListClassUser.class));
        }
    }

    @Override
    public boolean UpdateClassPQuery(JdbcTemplate sql,String key, UpdateClass clase) throws Exception{
        String id = new Crypto().Decrypt(key);

        String query = "UPDATE clase SET titulo = ?, descripcion = ?, fecha_inicio = ?, fecha_finalizacion = ?, tipo_idtipo = ?, nivel_idnivel = ? WHERE idclase = ? ";

        sql.update(query, clase.getTitulo(), clase.getDescripcion(), clase.getFecha_inicio(), clase.getFecha_finalizacion(), clase.getTipo_idtipo(), clase.getNivel_idnivel(), id);

        return true;
    }

    @Override
    public boolean DeleteClassQuery(JdbcTemplate sql,String id ) throws Exception{
        String Querry1 = "Select * FROM lista WHERE clase = ?";
        ModelLista lista = sql.queryForObject(Querry1, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelLista.class));
        sql.update("DELETE FROM clase WHERE idclase = ?", id);
        sql.update("DELETE FROM lista_has_usuario WHERE lista_idlista = ?", lista.getIdlista());
        sql.update("DELETE FROM lista WHERE clase = ?", id);
        return true;
    }

    @Override
    public int  VerifyRolQuery(JdbcTemplate sql,String id){
        String query = "SELECT * FROM usuario WHERE idusuario = ?";
        ModelUsuario user =  sql.queryForObject(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        return user.getRol_idrol();
    }

    @Override
    public boolean  VerifyClassDQuery(JdbcTemplate sql,String id){
        String query = "SELECT * FROM clase WHERE idclase = ?";
        List<ModelClase> clase =  sql.query(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelClase.class));

        if(clase.isEmpty()){
            return false;
        }else{
            return true;
        }
    }

    @Override
    public boolean RegisterStudentQuery(JdbcTemplate sql,String idU, String idC){
        ModelLista lista = sql.queryForObject("SELECT * FROM lista WHERE clase = ?", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelLista.class));

        List<ModelLista_has_usuario> valid =  sql.query("SELECT * FROM lista_has_usuario WHERE lista_idlista = ? AND usuario_idusuario = ?", new Object[]{lista.getIdlista(), idU}, BeanPropertyRowMapper.newInstance(ModelLista_has_usuario.class));

        if(valid.isEmpty()){
            sql.update("Insert into lista_has_usuario (lista_idlista, usuario_idusuario) values(?, ?)", lista.getIdlista(), idU);
            return true;
        }

        return false;
    }

    @Override
    public List<ListStudentClass> StudentListCQuery(JdbcTemplate sql,String id){
        String query = "SELECT usuario.foto, usuario.nombre, usuario.apellido, usuario.idusuario FROM lista_has_usuario JOIN usuario ON usuario.idusuario = lista_has_usuario.usuario_idusuario JOIN lista ON lista.idlista = lista_has_usuario.lista_idlista WHERE lista.clase = ?";
        return sql.query(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ListStudentClass.class));
    }

    @Override
    public boolean PostQuery(cloudinaryService cloudinary,JdbcTemplate sql,String idC, String idU, MultipartFile file, String Text) throws Exception{
        if(file != null){
            String url = cloudinary.uploadImage(file, "publicaciones");
            String query = "insert into publicacion(texto, imagen, clase_idclase, usuario_idusuario) values(?,?,?,?);";
            sql.update(query, Text, url, idC, idU);
            return true;
        }
        String query = "insert into publicacion(texto, clase_idclase, usuario_idusuario) values(?,?,?);";
        sql.update(query, Text, idC, idU);
        return true;
    }

    @Override
    public List<ListPostClass> PostListQuery(JdbcTemplate sql,String id){
        String query = " select usuario.foto, usuario.nombre, usuario.apellido, publicacion.texto, publicacion.imagen from publicacion JOIN usuario ON usuario.idusuario = publicacion.usuario_idusuario WHERE publicacion.clase_idclase = ? ;";
        return sql.query(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ListPostClass.class));
    }

    @Override
    public List<LQuialificationsStudent> getQualificationQuery(JdbcTemplate sql,String idC){
        String querry = "SELECT usuario.foto ,usuario.nombre, usuario.apellido, calificacion.preguntas, calificacion.respuestas, calificacion.calificacion, quiz.titulo FROM calificacion JOIN usuario ON usuario.idusuario = calificacion.usuario_idusuario JOIN quiz ON quiz.idquiz = calificacion.quiz_idquiz WHERE calificacion.clase_idclase = ? ;";
        return sql.query(querry, new Object[]{idC}, (rs, rowNum) -> new LQuialificationsStudent(
                rs.getString("foto"),
                rs.getString("nombre"),
                rs.getString("apellido"),
                rs.getString("preguntas"),
                rs.getString("respuestas"),
                rs.getString("calificacion"),
                rs.getString("titulo")
        ));
    }

    @Override
    public List<QualificationStudent> studentQualificationQuery(JdbcTemplate sql,String idU, String idC){
        String querry = "SELECT quiz.titulo, calificacion.preguntas, calificacion.respuestas, calificacion.calificacion FROM calificacion JOIN quiz ON calificacion.quiz_idquiz = quiz.idquiz WHERE calificacion.usuario_idusuario = ? AND calificacion.clase_idclase = ? ;";
        return sql.query(querry, new Object[]{idU, idC}, (rs, rowNum) -> new QualificationStudent(
                rs.getString("titulo"),
                rs.getString("preguntas"),
                rs.getString("respuestas"),
                rs.getInt("calificacion")
        ));
    }

    @Override
    public ModelClase getClassQuery(JdbcTemplate sql,String id){
        String query = "SELECT * FROM clase WHERE idclase = ?";
        return sql.queryForObject(query, new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelClase.class));
    }
}
