package com.backend.dolhack.strategies.interfaces;

import com.backend.dolhack.models.home.ListPeople;
import com.backend.dolhack.models.home.MainModel;
import com.backend.dolhack.models.home.ModelNotificacion;
import com.backend.dolhack.models.home.userListModel;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public interface QueryStrategyHome {
    public List<userListModel> UserListQuery(JdbcTemplate sql, String rol);

    public List<ListPeople> ListQuery(JdbcTemplate sql,String id);

    public MainModel MainQuery(JdbcTemplate sql);

    public List<ModelNotificacion> NotificacionQuery(JdbcTemplate sql, String id);

    public boolean deleteNotifications(JdbcTemplate sql, String id);

    public int countNotifications(JdbcTemplate sql, String id);
}
