package com.backend.dolhack.repositories;

import java.util.List;

import com.backend.dolhack.strategies.interfaces.QueryStrategyHome;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.backend.dolhack.models.classs.classListModel;
import com.backend.dolhack.models.home.ListPeople;
import com.backend.dolhack.models.home.MainModel;
import com.backend.dolhack.models.home.userListModel;
import com.backend.dolhack.models.user.ModelUsuario;
import com.backend.dolhack.service.cloudinaryService;

@Repository
public class HomeRepositorio {
    private final JdbcTemplate sql;
    private final QueryStrategyHome queryStrategyHome;
 
    @Autowired
    public HomeRepositorio(JdbcTemplate sql, QueryStrategyHome queryStrategyHome){
        this.sql = sql;
        this.queryStrategyHome = queryStrategyHome;
    }
 
    public List<userListModel> getUserList(String rol){
        return queryStrategyHome.UserListQuery(sql,rol);
    }

    public List<ListPeople> getList(String id){
        return queryStrategyHome.ListQuery(sql,id);
    }

    public MainModel Main(){
        return queryStrategyHome.MainQuery(sql);
    }
}
