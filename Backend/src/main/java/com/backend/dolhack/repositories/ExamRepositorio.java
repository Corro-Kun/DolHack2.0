package com.backend.dolhack.repositories;

import com.backend.dolhack.lib.IDRandom;
import com.backend.dolhack.models.exam.ModelOpcion;
import com.backend.dolhack.models.exam.ModelPregunta;
import com.backend.dolhack.models.exam.ModelQuiz;
import com.backend.dolhack.models.exam.NewQuizModel;
import com.backend.dolhack.models.exam.OptionModel;
import com.backend.dolhack.models.exam.PreguntaViewr;
import com.backend.dolhack.models.exam.QuestionModel;
import com.backend.dolhack.models.exam.QuizViewr;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ExamRepositorio {
    private final JdbcTemplate sql;

    @Autowired
    public ExamRepositorio(JdbcTemplate sql) {
        this.sql = sql;
    }

    public boolean newQuiz(String idU, String idC, NewQuizModel Quiz){
        String id = new IDRandom().generateID();
        String query = "INSERT INTO quiz(idquiz, titulo, descripcion, clase_idclase, usuario_idusuario) values(?,?,?,?,?);";
        sql.update(query, id, Quiz.getTitle(), Quiz.getDescription(), idC, idU);

        List<QuestionModel> questions = Quiz.getQuestions();

        for(QuestionModel question : questions ){
            String query2 = "INSERT INTO pregunta(idpregunta,pregunta, quiz_idquiz) values(?,?,?);";
            String idP = new IDRandom().generateID();
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

    public List<ModelQuiz> getQuizzes(String idC){
        String query = "SELECT * FROM quiz WHERE clase_idclase = ?;";
        return sql.query(query, new Object[]{idC}, (rs, rowNum) -> new ModelQuiz(
                rs.getString("idquiz"),
                rs.getString("titulo"),
                rs.getString("descripcion"),
                rs.getString("clase_idclase"),
                rs.getString("usuario_idusuario")
        ));
    }

    public QuizViewr getQuiz(String idQ){
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
}
