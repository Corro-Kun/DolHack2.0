package com.backend.dolhack.strategies.Exam;

import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.classs.ModelClase;
import com.backend.dolhack.models.classs.ModelEstado_clase;
import com.backend.dolhack.models.classs.ModelLista;
import com.backend.dolhack.models.classs.ModelLista_has_usuario;
import com.backend.dolhack.models.exam.*;
import com.backend.dolhack.models.user.ModelCorreo;
import com.backend.dolhack.models.user.ModelUsuario;
import com.backend.dolhack.strategies.interfaces.QueryStrategyExam;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;

public class MySQLQueryStrategyExam implements QueryStrategyExam {
    @Override
    public boolean newQuizQuery(IDRandomFactory idRandomFactory, JdbcTemplate sql, String idU, String idC, NewQuizModel Quiz){
        ModelEstado_clase estado = sql.queryForObject("SELECT * FROM estado_clase WHERE clase_idclase = ?", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelEstado_clase.class));

        if(estado.getEstado_calificacion() == 0){
            throw new RuntimeException("La clase cerro las calificaciones, no se puede realizar el examen");
        }

        List<ModelQuiz> verifc = sql.query("select * from quiz where titulo = ? AND clase_idclase = ?;", new Object[]{Quiz.getTitle(), idC}, BeanPropertyRowMapper.newInstance(ModelQuiz.class));

        if(!verifc.isEmpty()){
            throw new RuntimeException("Ya existe un examen con ese nombre");
        }

        String id = idRandomFactory.generateID();
        String query = "INSERT INTO quiz(idquiz, titulo, descripcion, clase_idclase, usuario_idusuario) values(?,?,?,?,?);";
        sql.update(query, id, Quiz.getTitle(), Quiz.getDescription(), idC, idU);

        List<QuestionModel> questions = Quiz.getQuestions();

        for(QuestionModel question : questions ){
            String query2 = "INSERT INTO pregunta(idpregunta,pregunta,puntos ,quiz_idquiz) values(?,?,?,?);";
            String idP = idRandomFactory.generateID();
            sql.update(query2, idP ,question.getQuestion(), question.getPoints(),id);

            List<OptionModel> options = question.getOptions();

            int value = 1;

            for(OptionModel option : options) {
                String query5 = "INSERT INTO opcion(opcion, respuesta, calificacion, pregunta_idpregunta) values(?,?,?,?);";
                if(value == 1){
                    sql.update(query5, "A", option.getOption(), option.getQualification(), idP);
                }else if(value == 2){
                    sql.update(query5, "B", option.getOption(), option.getQualification(), idP);
                }else if(value == 3){
                    sql.update(query5, "C", option.getOption(), option.getQualification(), idP);
                }else if(value == 4){
                    sql.update(query5, "D", option.getOption(), option.getQualification(), idP);
                }

                value = value + 1;
            }
        }

        // Notificaciones

        ModelUsuario user = sql.queryForObject("SELECT * FROM usuario WHERE idusuario = ?", new Object[]{idU}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        ModelQuiz quiz = sql.queryForObject("select * from quiz where idquiz = ?;", new Object[]{id}, BeanPropertyRowMapper.newInstance(ModelQuiz.class));

        ModelLista lista = sql.queryForObject("select * from lista where clase = ?;", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelLista.class));

        List<ModelLista_has_usuario> estudiantes = sql.query("select * from lista_has_usuario where lista_idlista = ?;", new Object[]{lista.getIdlista()}, BeanPropertyRowMapper.newInstance(ModelLista_has_usuario.class));

        for (ModelLista_has_usuario estudiante : estudiantes){
            sql.update("INSERT INTO notificacion(titulo_notificacion, texto_notificacion, usuario_idusuario) values(?, ?, ?)", "Un profesor ha creado un examen", "El profesor " + user.getNombre() + " " + user.getApellido() + " ha creado el examen " + quiz.getTitulo(), estudiante.getUsuario_idusuario());
        }

        return true;
    }

    @Override
    public List<ModelQuiz> QuizzesQuery(JdbcTemplate sql, String idC, String idU){
        String query = "SELECT * FROM quiz WHERE clase_idclase = ?";

        ModelUsuario user = sql.queryForObject("SELECT * FROM usuario WHERE idusuario = ?", new Object[]{idU}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));

        if(user.getRol_idrol() == 2){
            return sql.query(query+" AND publicado = 1", new Object[]{idC}, (rs, rowNum) -> new ModelQuiz(
                    rs.getString("idquiz"),
                    rs.getString("titulo"),
                    rs.getString("descripcion"),
                    rs.getInt("publicado"),
                    rs.getString("clase_idclase"),
                    rs.getString("usuario_idusuario")
            ));

        }

        return sql.query(query, new Object[]{idC}, (rs, rowNum) -> new ModelQuiz(
                rs.getString("idquiz"),
                rs.getString("titulo"),
                rs.getString("descripcion"),
                rs.getInt("publicado"),
                rs.getString("clase_idclase"),
                rs.getString("usuario_idusuario")
        ));

    }

    @Override
    public QuizViewr QuizQuery(JdbcTemplate sql, String idQ){
        String query = "SELECT * FROM quiz WHERE idquiz = ?;";
        ModelQuiz quiz = sql.queryForObject(query, new Object[]{idQ}, (rs, rowNum) -> new ModelQuiz(
                rs.getString("idquiz"),
                rs.getString("titulo"),
                rs.getString("descripcion"),
                rs.getInt("publicado"),
                rs.getString("clase_idclase"),
                rs.getString("usuario_idusuario")
        ));

        String query2 = "SELECT * FROM pregunta WHERE quiz_idquiz = ?;";

        List<ModelPregunta> preguntas = sql.query(query2, new Object[]{idQ}, BeanPropertyRowMapper.newInstance(ModelPregunta.class));

        List<PreguntaViewr> preguntasViewr = new java.util.ArrayList<PreguntaViewr>();

        for(ModelPregunta pregunta : preguntas){
            String query3 = "SELECT * FROM opcion WHERE pregunta_idpregunta = ?;";
            List<ModelOpcion> opciones = sql.query(query3, new Object[]{pregunta.getIdPregunta()}, (rs, rowNum) -> new ModelOpcion(
                    rs.getInt("idopcion"),
                    rs.getString("opcion"),
                    rs.getString("respuesta"),
                    rs.getInt("calificacion"),
                    rs.getString("pregunta_idpregunta")
            ));

            PreguntaViewr preguntaViewr = new PreguntaViewr(pregunta.getIdPregunta(), pregunta.getPregunta(), pregunta.getPuntos() ,opciones);

            preguntasViewr.add(preguntaViewr);
        }

        return new QuizViewr(idQ, quiz.getTitulo(), quiz.getDescripcion(), preguntasViewr);
    }

    @Override
    public boolean VerificExamQuery(JdbcTemplate sql,String idu, String idq, String idc){
        ModelEstado_clase estado = sql.queryForObject("SELECT * FROM estado_clase WHERE clase_idclase = ?", new Object[]{idc}, BeanPropertyRowMapper.newInstance(ModelEstado_clase.class));

        if(estado.getEstado_calificacion() == 0){
            throw new RuntimeException("La clase cerro las calificaciones, no se puede realizar el examen");
        }

        List<ModelRespuesta> verifc = sql.query("select * from respuesta where quiz_idquiz = ? AND usuario_idusuario = ?;", new Object[]{idq, idu}, BeanPropertyRowMapper.newInstance(ModelRespuesta.class));
        if(verifc.isEmpty()){
            return true;
        }
        return false;
    }

    @Override
    public boolean PostAnswerQuery(IDRandomFactory idRandomFactory,JdbcTemplate sql, ListAnswersModel answer, String idc, String idu, String idq){
        ModelEstado_clase estado = sql.queryForObject("SELECT * FROM estado_clase WHERE clase_idclase = ?", new Object[]{idc}, BeanPropertyRowMapper.newInstance(ModelEstado_clase.class));

        if(estado.getEstado_calificacion() == 0){
            throw new RuntimeException("La clase cerro las calificaciones, no se puede realizar el examen");
        }

        List<ModelRespuesta> verifc = sql.query("select * from respuesta where quiz_idquiz = ? AND usuario_idusuario = ?;", new Object[]{idq, idu}, BeanPropertyRowMapper.newInstance(ModelRespuesta.class));
        if(!verifc.isEmpty()){
            return false;
        }
        List<AnswerModel> answers = answer.getRespuestas();
        float calificacion = 0;
        int quizs = 0;
        int quialification = 0;
        for(AnswerModel ans : answers){
            String id = idRandomFactory.generateID();
            String querry = "insert into respuesta(idrespuesta, opcion, respuesta, calificacion, quiz_idquiz, pregunta_idpregunta, usuario_idusuario, clase_idclase) values (?, ?, ?, ?, ?, ?, ?, ?);";
            sql.update(querry, id, ans.getOpcion(), ans.getRespuesta(), ans.getCalificacion(), idq, ans.getPregunta_idpregunta(), idu, idc);

            ModelPregunta pregunta = sql.queryForObject("SELECT * FROM pregunta WHERE idpregunta = ?", new Object[]{ans.getPregunta_idpregunta()}, BeanPropertyRowMapper.newInstance(ModelPregunta.class));

            if (ans.getCalificacion().equals("1")){
                calificacion = calificacion + pregunta.getPuntos();
            }

            quizs = quizs + 1;
            quialification = quialification + Integer.parseInt(ans.getCalificacion());
        }
        String idCa = idRandomFactory.generateID();
        String querry2 = "insert into calificacion(idcalificacion, preguntas, respuestas, calificacion, quiz_idquiz, usuario_idusuario, clase_idclase) values(?, ?, ?, ?, ?, ?, ?);";
        sql.update(querry2, idCa, quizs, quialification, calificacion, idq, idu, idc);

        // Notificaciones

        ModelClase clase = sql.queryForObject("SELECT * FROM clase WHERE idclase = ?", new Object[]{idc}, BeanPropertyRowMapper.newInstance(ModelClase.class));
        ModelUsuario user = sql.queryForObject("SELECT * FROM usuario WHERE idusuario = ?", new Object[]{idu}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        ModelQuiz quiz = sql.queryForObject("select * from quiz where idquiz = ?;", new Object[]{idq}, BeanPropertyRowMapper.newInstance(ModelQuiz.class));

        sql.update("INSERT INTO notificacion(titulo_notificacion, texto_notificacion, usuario_idusuario) values(?, ?, ?)", "Un estudiante ha realizado un examen", "El estudiante " + user.getNombre() + " " + user.getApellido() + " ha realizado el examen " + quiz.getTitulo() + " con una calificacion de " + calificacion, clase.getUsuario_idusuario());
        sql.update("INSERT INTO notificacion(titulo_notificacion, texto_notificacion, usuario_idusuario) values(?, ?, ?)", "Has realizado un examen", "Has realizado el examen " + quiz.getTitulo() + " con una calificacion de " + calificacion, idu);
 
        return true;
    }

    @Override
    public boolean DeleteQuizQuery(JdbcTemplate sql,String idc, String idq){
        sql.update("DELETE FROM calificacion WHERE quiz_idquiz = ?;", idq);
        sql.update("DELETE FROM respuesta WHERE quiz_idquiz = ?;" , idq);
        List<ModelPregunta> preguntas = sql.query("SELECT * FROM pregunta WHERE quiz_idquiz = ?;", new Object[]{idq}, BeanPropertyRowMapper.newInstance(ModelPregunta.class));
        for(ModelPregunta pregunta : preguntas){
            sql.update("DELETE FROM opcion WHERE pregunta_idpregunta = ?;", pregunta.getIdPregunta());
        }
        sql.update("DELETE FROM pregunta WHERE quiz_idquiz = ?;", idq);
        sql.update("DELETE FROM quiz WHERE idquiz = ?;", idq);
        return true;
    }

    @Override
    public getExamUpdate getExamUpQuery(JdbcTemplate sql, String idQ){
        String query = "SELECT * FROM quiz WHERE idquiz = ?;";
        ModelQuiz quiz = sql.queryForObject(query, new Object[]{idQ}, (rs, rowNum) -> new ModelQuiz(
                rs.getString("idquiz"),
                rs.getString("titulo"),
                rs.getString("descripcion"),
                rs.getInt("publicado"),
                rs.getString("clase_idclase"),
                rs.getString("usuario_idusuario")
        ));

        String query2 = "SELECT * FROM pregunta WHERE quiz_idquiz = ?;";

        List<ModelPregunta> preguntas = sql.query(query2, new Object[]{idQ}, BeanPropertyRowMapper.newInstance(ModelPregunta.class));

        List<PreguntaViewr> preguntasViewr = new java.util.ArrayList<PreguntaViewr>();

        for(ModelPregunta pregunta : preguntas){
            String query3 = "SELECT * FROM opcion WHERE pregunta_idpregunta = ?;";
            List<ModelOpcion> opciones = sql.query(query3, new Object[]{pregunta.getIdPregunta()}, (rs, rowNum) -> new ModelOpcion(
                    rs.getInt("idopcion"),
                    rs.getString("opcion"),
                    rs.getString("respuesta"),
                    rs.getInt("calificacion"),
                    rs.getString("pregunta_idpregunta")
            ));

            PreguntaViewr preguntaViewr = new PreguntaViewr(pregunta.getIdPregunta(), pregunta.getPregunta(), pregunta.getPuntos(),opciones);

            preguntasViewr.add(preguntaViewr);
        }

        return new getExamUpdate(idQ, quiz.getTitulo(), quiz.getDescripcion(), preguntasViewr);
    }

    @Override
    public boolean UpdateQuizQuery(JdbcTemplate sql,getExamUpdate Quiz){
        String query = "UPDATE quiz SET titulo = ?, descripcion = ? WHERE idquiz = ?;";
        sql.update(query, Quiz.getTitulo(), Quiz.getDescripcion(), Quiz.getIdquiz());
        List<PreguntaViewr> questions = Quiz.getPreguntas();

        float total = 0;

        for(PreguntaViewr a: questions){
            total = total + a.getPuntos();
        }

        if(total != 100){
            throw new RuntimeException("La suma de los puntos de las preguntas debe ser 100");
        }

        for(PreguntaViewr question : questions ){
            String query2 = "UPDATE pregunta SET pregunta = ?, puntos = ? WHERE idpregunta = ?;";

            if(question.getPregunta().length() <= 0){
                throw new RuntimeException("La pregunta no puede estar vacia");
            }

            sql.update(query2, question.getPregunta(), question.getPuntos() ,question.getIdpregunta());

            List<ModelOpcion> options = question.getOpciones();

            int value = 1;

            for(ModelOpcion option : options) {
                String query5 = "UPDATE opcion SET opcion = ?, respuesta = ?, calificacion = ? WHERE idopcion = ?;";

                if(option.getRespuesta().length() <= 0){
                    throw new RuntimeException("La opcion no puede estar vacia");
                }

                if(value == 1){
                    sql.update(query5, option.getOpcion(), option.getRespuesta(), option.getCalificacion(), option.getIdopcion());
                }else if(value == 2){
                    sql.update(query5, option.getOpcion(), option.getRespuesta(), option.getCalificacion(), option.getIdopcion());
                }else if(value == 3){
                    sql.update(query5, option.getOpcion(), option.getRespuesta(), option.getCalificacion(), option.getIdopcion());
                }else if(value == 4){
                    sql.update(query5, option.getOpcion(), option.getRespuesta(), option.getCalificacion(), option.getIdopcion());
                }

                value = value + 1;
            }
        }

        return true;
    }

    @Override
    public boolean publicQuizQuery(JdbcTemplate sql,String idQ){
        String query = "UPDATE quiz SET publicado = 1 WHERE idquiz = ?;";
        sql.update(query, idQ);
        return true;
    }

    @Override
    public StateModel StateQuery(JdbcTemplate sql, String idC, String idU){
        
        int totalExam = sql.queryForObject("select count(*) from quiz where clase_idclase = ? and publicado = 1;", new Object[]{idC}, Integer.class);
        int totalRespondidos = sql.queryForObject("select count(*) from calificacion where usuario_idusuario = ?;", new Object[]{idU}, Integer.class);

        if  (totalRespondidos == 0){
            return new StateModel(totalExam, totalRespondidos, 0f);
        }

        float calificacion = sql.queryForObject("select sum(calificacion) from calificacion where usuario_idusuario = ?;", new Object[]{idU}, Float.class);

        return new StateModel(totalExam, totalRespondidos, calificacion/totalExam);
    }

    @Override 
    public List<String> MissingQuizQuery(JdbcTemplate sql, String idC, String idU){
        List<String> quizlate = new ArrayList<String>();

        List<ModelQuiz> quizzes = sql.query("select * from quiz where clase_idclase = ? and publicado = 1 ;", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelQuiz.class));

        for (ModelQuiz quiz : quizzes){
            List<ModelCalificacion> calificaciones = sql.query("select * from calificacion where usuario_idusuario = ? and quiz_idquiz = ?;", new Object[]{idU, quiz.getIdquiz()}, BeanPropertyRowMapper.newInstance(ModelCalificacion.class));
            
            if (calificaciones.isEmpty()){
                quizlate.add(quiz.getTitulo());
            }
        }

        return quizlate;

    }

    @Override
    public boolean deleteOptionQuery(JdbcTemplate sql, String idO, String idP){
        sql.update("DELETE FROM opcion WHERE idopcion = ?;", idO);

        List<ModelOpcion> opciones = sql.query("SELECT * FROM opcion WHERE pregunta_idpregunta = ?;", new Object[]{idP}, BeanPropertyRowMapper.newInstance(ModelOpcion.class));

        int value = 1;

        for(ModelOpcion opcion : opciones) {
            String query5 = "UPDATE opcion SET opcion = ? WHERE idopcion = ?;";

            if(value == 1){
                sql.update(query5, "A", opcion.getIdopcion());
            }else if(value == 2){
                sql.update(query5, "B", opcion.getIdopcion());
            }else if(value == 3){
                sql.update(query5, "C", opcion.getIdopcion());
            }else if(value == 4){
                sql.update(query5, "D", opcion.getIdopcion());
            }

            value = value + 1;
        }


        return true;
    }

    @Override
    public boolean addOptionQuery(JdbcTemplate sql, String idP){
        String query = "INSERT INTO opcion(opcion, respuesta, calificacion, pregunta_idpregunta) values(?,?,?,?);";
        String respuesta = "Texto de ejemplo";
        List<ModelOpcion> opciones = sql.query("SELECT * FROM opcion WHERE pregunta_idpregunta = ?;", new Object[]{idP}, BeanPropertyRowMapper.newInstance(ModelOpcion.class));
        if(opciones.size() == 4){
            return false;
        }
        if(opciones.size() == 0){
            sql.update(query, "A", respuesta, 0, idP);
            return true;
        }
        else if (opciones.size() == 1){
            sql.update(query, "B", respuesta, 0, idP);
            return true;
        }
        else if (opciones.size() == 2){
            sql.update(query, "C", respuesta, 0, idP);
            return true;
        }
        else if (opciones.size() == 3){
            sql.update(query, "D", respuesta, 0, idP);
            return true;
        }

        return true;
    }

    @Override
    public boolean ChangerStateNotes(JdbcTemplate sql, String idC){
        ModelEstado_clase estado = sql.queryForObject("SELECT * FROM estado_clase WHERE clase_idclase = ?", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelEstado_clase.class));

        if (estado.getEstado_clase() == 0){
            throw new RuntimeException("La clase ya cerro la clase, no se puede cambiar el estado de las calificaciones");
        }

        if(estado.getEstado_calificacion() == 0){
            sql.update("UPDATE estado_clase SET estado_calificacion = 1 WHERE clase_idclase = ?;", idC);

            ModelClase clase = sql.queryForObject("SELECT * FROM clase WHERE idclase = ?", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelClase.class));

            ModelLista lista = sql.queryForObject("select * from lista where clase = ?;", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelLista.class));

            List<ModelLista_has_usuario> estudiantes = sql.query("select * from lista_has_usuario where lista_idlista = ?;", new Object[]{lista.getIdlista()}, BeanPropertyRowMapper.newInstance(ModelLista_has_usuario.class));

            ModelUsuario user = sql.queryForObject("select * from usuario where idusuario = ?;", new Object[]{clase.getUsuario_idusuario()}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));

            for (ModelLista_has_usuario estudiante : estudiantes) {
                if(!estudiante.getUsuario_idusuario().equals(clase.getUsuario_idusuario())){
                    sql.update("INSERT INTO notificacion(titulo_notificacion, texto_notificacion, usuario_idusuario) values(?, ?, ?)","Se acaba de abrir las calificaciones de tu curso" ,"Tu profesor " + user.getNombre() + " " + user.getApellido() + " ha abierto las calificaciones de la clase "+clase.getTitulo()+".", estudiante.getUsuario_idusuario());
                }
            }

        }else{
            sql.update("UPDATE estado_clase SET estado_calificacion = 0 WHERE clase_idclase = ?;", idC);

            ModelClase clase = sql.queryForObject("SELECT * FROM clase WHERE idclase = ?", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelClase.class));

            ModelLista lista = sql.queryForObject("select * from lista where clase = ?;", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelLista.class));

            List<ModelLista_has_usuario> estudiantes = sql.query("select * from lista_has_usuario where lista_idlista = ?;", new Object[]{lista.getIdlista()}, BeanPropertyRowMapper.newInstance(ModelLista_has_usuario.class));

            ModelUsuario user = sql.queryForObject("select * from usuario where idusuario = ?;", new Object[]{clase.getUsuario_idusuario()}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));

            for (ModelLista_has_usuario estudiante : estudiantes) {
                if(!estudiante.getUsuario_idusuario().equals(clase.getUsuario_idusuario())){
                    sql.update("INSERT INTO notificacion(titulo_notificacion, texto_notificacion, usuario_idusuario) values(?, ?, ?)","Se acaba de cerrar las calificaciones de tu curso" ,"Tu profesor " + user.getNombre() + " " + user.getApellido() + " ha cerrado las calificaciones de la clase "+clase.getTitulo()+".", estudiante.getUsuario_idusuario());
                }
            }
        }

        return true;
    }

    public StateView StateViewStudentQuery(JdbcTemplate sql, String idC, String idU){
        ModelUsuario user = sql.queryForObject("SELECT * FROM usuario WHERE idusuario = ?", new Object[]{idU}, BeanPropertyRowMapper.newInstance(ModelUsuario.class));
        ModelCorreo correo = sql.queryForObject("SELECT * FROM correo WHERE usuario_idusuario = ?", new Object[]{idU}, BeanPropertyRowMapper.newInstance(ModelCorreo.class));  

        int totalExam = sql.queryForObject("select count(*) from quiz where clase_idclase = ? and publicado = 1;", new Object[]{idC}, Integer.class);
        int totalRespondidos = sql.queryForObject("select count(*) from calificacion where usuario_idusuario = ?;", new Object[]{idU}, Integer.class);


        List<String> quizlate = new ArrayList<String>();

        List<ModelQuiz> quizzes = sql.query("select * from quiz where clase_idclase = ? and publicado = 1 ;", new Object[]{idC}, BeanPropertyRowMapper.newInstance(ModelQuiz.class));

        for (ModelQuiz quiz : quizzes){
            List<ModelCalificacion> calificaciones = sql.query("select * from calificacion where usuario_idusuario = ? and quiz_idquiz = ?;", new Object[]{idU, quiz.getIdquiz()}, BeanPropertyRowMapper.newInstance(ModelCalificacion.class));
            
            if (calificaciones.isEmpty()){
                quizlate.add(quiz.getTitulo());
            }
        }

        if(totalRespondidos == 0){
            return new StateView(user.getFoto(),user.getNombre(), user.getApellido(), correo.getCorreo(), totalExam, totalRespondidos, 0f, quizlate);
        }

        float calificacion = sql.queryForObject("select sum(calificacion) from calificacion where usuario_idusuario = ?;", new Object[]{idU}, Float.class);

        return new StateView(user.getFoto(),user.getNombre(), user.getApellido(), correo.getCorreo(), totalExam, totalRespondidos, calificacion/totalExam, quizlate);
    }
}

