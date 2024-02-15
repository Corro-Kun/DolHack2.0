package com.backend.dolhack.strategies.Exam;

import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.exam.*;
import com.backend.dolhack.strategies.interfaces.QueryStrategyExam;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class MySQLQueryStrategyExam implements QueryStrategyExam {
    @Override
    public boolean newQuizQuery(IDRandomFactory idRandomFactory, JdbcTemplate sql, String idU, String idC, NewQuizModel Quiz){
        String id = idRandomFactory.generateID();
        String query = "INSERT INTO quiz(idquiz, titulo, descripcion, clase_idclase, usuario_idusuario) values(?,?,?,?,?);";
        sql.update(query, id, Quiz.getTitle(), Quiz.getDescription(), idC, idU);

        List<QuestionModel> questions = Quiz.getQuestions();

        for(QuestionModel question : questions ){
            String query2 = "INSERT INTO pregunta(idpregunta,pregunta, quiz_idquiz) values(?,?,?);";
            String idP = idRandomFactory.generateID();
            sql.update(query2, idP ,question.getQuestion(), id);

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

        return true;
    }

    @Override
    public List<ModelQuiz> QuizzesQuery(JdbcTemplate sql, String idC){
        String query = "SELECT * FROM quiz WHERE clase_idclase = ?;";
        return sql.query(query, new Object[]{idC}, (rs, rowNum) -> new ModelQuiz(
                rs.getString("idquiz"),
                rs.getString("titulo"),
                rs.getString("descripcion"),
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
                rs.getString("clase_idclase"),
                rs.getString("usuario_idusuario")
        ));

        String query2 = "SELECT * FROM pregunta WHERE quiz_idquiz = ?;";

        List<ModelPregunta> preguntas = sql.query(query2, new Object[]{idQ}, (rs, rowNum) -> new ModelPregunta(
                rs.getString("idpregunta"),
                rs.getString("pregunta"),
                rs.getString("quiz_idquiz")
        ));

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

            PreguntaViewr preguntaViewr = new PreguntaViewr(pregunta.getIdPregunta(), pregunta.getPregunta(), opciones);

            preguntasViewr.add(preguntaViewr);
        }

        return new QuizViewr(idQ, quiz.getTitulo(), quiz.getDescripcion(), preguntasViewr);
    }

    @Override
    public boolean VerificExamQuery(JdbcTemplate sql,String idu, String idq){
        List<ModelRespuesta> verifc = sql.query("select * from respuesta where quiz_idquiz = ? AND usuario_idusuario = ?;", new Object[]{idq, idu}, BeanPropertyRowMapper.newInstance(ModelRespuesta.class));
        if(verifc.isEmpty()){
            return true;
        }
        return false;
    }

    @Override
    public boolean PostAnswerQuery(IDRandomFactory idRandomFactory,JdbcTemplate sql, ListAnswersModel answer, String idc, String idu, String idq){
        List<ModelRespuesta> verifc = sql.query("select * from respuesta where quiz_idquiz = ? AND usuario_idusuario = ?;", new Object[]{idq, idu}, BeanPropertyRowMapper.newInstance(ModelRespuesta.class));
        if(!verifc.isEmpty()){
            return false;
        }
        List<AnswerModel> answers = answer.getRespuestas();
        int quizs = 0;
        int quialification = 0;
        for(AnswerModel ans : answers){
            String id = idRandomFactory.generateID();
            String querry = "insert into respuesta(idrespuesta, opcion, respuesta, calificacion, quiz_idquiz, pregunta_idpregunta, usuario_idusuario, clase_idclase) values (?, ?, ?, ?, ?, ?, ?, ?);";
            sql.update(querry, id, ans.getOpcion(), ans.getRespuesta(), ans.getCalificacion(), idq, ans.getPregunta_idpregunta(), idu, idc);
            quizs = quizs + 1;
            quialification = quialification + Integer.parseInt(ans.getCalificacion());
        }
        float calificacion = ((float)quialification / (float)quizs) * 100;
        String idCa = idRandomFactory.generateID();
        String querry2 = "insert into calificacion(idcalificacion, preguntas, respuestas, calificacion, quiz_idquiz, usuario_idusuario, clase_idclase) values(?, ?, ?, ?, ?, ?, ?);";
        sql.update(querry2, idCa, quizs, quialification, calificacion, idq, idu, idc);
        return true;
    }

    @Override
    public boolean DeleteQuizQuery(JdbcTemplate sql,String idc, String idq){
        sql.update("DELETE FROM calificacion WHERE quiz_idquiz = ?;", idq);
        sql.update("DELETE FROM respuesta WHERE quiz_idquiz = ?;" , idq);
        List<ModelPregunta> preguntas = sql.query("SELECT * FROM pregunta WHERE quiz_idquiz = ?;", new Object[]{idq}, (rs, rowNum) -> new ModelPregunta(
                rs.getString("idpregunta"),
                rs.getString("pregunta"),
                rs.getString("quiz_idquiz")
        ));
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
                rs.getString("clase_idclase"),
                rs.getString("usuario_idusuario")
        ));

        String query2 = "SELECT * FROM pregunta WHERE quiz_idquiz = ?;";

        List<ModelPregunta> preguntas = sql.query(query2, new Object[]{idQ}, (rs, rowNum) -> new ModelPregunta(
                rs.getString("idpregunta"),
                rs.getString("pregunta"),
                rs.getString("quiz_idquiz")
        ));

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

            PreguntaViewr preguntaViewr = new PreguntaViewr(pregunta.getIdPregunta(), pregunta.getPregunta(), opciones);

            preguntasViewr.add(preguntaViewr);
        }

        return new getExamUpdate(idQ, quiz.getTitulo(), quiz.getDescripcion(), preguntasViewr);
    }

    @Override
    public boolean UpdateQuizQuery(JdbcTemplate sql,getExamUpdate Quiz){
        String query = "UPDATE quiz SET titulo = ?, descripcion = ? WHERE idquiz = ?;";
        sql.update(query, Quiz.getTitulo(), Quiz.getDescripcion(), Quiz.getIdquiz());
        List<PreguntaViewr> questions = Quiz.getPreguntas();

        for(PreguntaViewr question : questions ){
            String query2 = "UPDATE pregunta SET pregunta = ? WHERE idpregunta = ?;";
            sql.update(query2, question.getPregunta(), question.getIdpregunta());
            System.err.println("ocurrio un error al actualizar la pregunta");

            List<ModelOpcion> options = question.getOpciones();

            int value = 1;

            for(ModelOpcion option : options) {
                String query5 = "UPDATE opcion SET opcion = ?, respuesta = ?, calificacion = ? WHERE idopcion = ?;";
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
}
