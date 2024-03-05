package com.backend.dolhack.strategies.interfaces;

import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.exam.*;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public interface QueryStrategyExam {
    public boolean newQuizQuery(IDRandomFactory idRandomFactory,JdbcTemplate sql, String idU, String idC, NewQuizModel Quiz);

    public List<ModelQuiz> QuizzesQuery( JdbcTemplate sql, String idC, String idU);

    public QuizViewr QuizQuery(JdbcTemplate sql,String idQ);

    public boolean VerificExamQuery(JdbcTemplate sql,String idu, String idq);

    public boolean PostAnswerQuery(IDRandomFactory idRandomFactory,JdbcTemplate sql,ListAnswersModel answer, String idc, String idu, String idq);

    public boolean DeleteQuizQuery(JdbcTemplate sql,String idc, String idq);

    public getExamUpdate getExamUpQuery(JdbcTemplate sql,String idQ);

    public boolean UpdateQuizQuery(JdbcTemplate sql,getExamUpdate Quiz);

    public boolean publicQuizQuery(JdbcTemplate sql,String idQ);

    public StateModel StateQuery(JdbcTemplate sql, String idC, String idU);
}
