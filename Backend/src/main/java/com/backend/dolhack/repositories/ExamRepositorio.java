package com.backend.dolhack.repositories;

import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.exam.*;

import java.util.List;

import com.backend.dolhack.strategies.interfaces.QueryStrategyExam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ExamRepositorio {
    private final JdbcTemplate sql;
    private final IDRandomFactory idRandomFactory;
    private final QueryStrategyExam queryStrategyExam;

    @Autowired
    public ExamRepositorio(JdbcTemplate sql, IDRandomFactory idRandomFactory, QueryStrategyExam queryStrategyExam) {
        this.sql = sql;
        this.idRandomFactory = idRandomFactory;
        this.queryStrategyExam = queryStrategyExam;
    }

    public boolean newQuiz(String idU, String idC, NewQuizModel Quiz){
        return queryStrategyExam.newQuizQuery(idRandomFactory, sql, idU, idC, Quiz);
    }

    public List<ModelQuiz> getQuizzes(String idC){
        return queryStrategyExam.QuizzesQuery(sql, idC);
    }

    public QuizViewr getQuiz(String idQ){
        return queryStrategyExam.QuizQuery(sql, idQ);
    }

    public boolean VerificExam(String idu, String idq){
        return queryStrategyExam.VerificExamQuery(sql, idu, idq);
    }

    public boolean PostAnswer(ListAnswersModel answer, String idc, String idu, String idq){
        return queryStrategyExam.PostAnswerQuery(idRandomFactory, sql, answer, idc, idu, idq);
    }

    public boolean DeleteQuiz(String idc, String idq){
        return queryStrategyExam.DeleteQuizQuery(sql, idc, idq);
    }

    public getExamUpdate getExamUp(String idQ){
        return queryStrategyExam.getExamUpQuery(sql, idQ);
    }

    public boolean UpdateQuiz(getExamUpdate Quiz){
        return queryStrategyExam.UpdateQuizQuery(sql, Quiz);
    }
}
