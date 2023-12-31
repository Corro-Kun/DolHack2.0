package com.backend.dolhack.config;

import com.backend.dolhack.strategies.Class.MySQLQueryStrategyClass;
import com.backend.dolhack.strategies.home.MySQLQueryStrategyHome;
import com.backend.dolhack.strategies.Exam.MySQLQueryStrategyExam;
import com.backend.dolhack.strategies.interfaces.QueryStrategyClass;
import com.backend.dolhack.strategies.interfaces.QueryStrategyExam;
import com.backend.dolhack.strategies.interfaces.QueryStrategyHome;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    @Bean
    public QueryStrategyHome queryStrategyHome() {
        return new MySQLQueryStrategyHome();
    }

    @Bean
    public QueryStrategyExam queryStrategyExam() {
        return new MySQLQueryStrategyExam();
    }

    @Bean
    public QueryStrategyClass queryStrategyClass() {
        return new MySQLQueryStrategyClass();
    }
}
