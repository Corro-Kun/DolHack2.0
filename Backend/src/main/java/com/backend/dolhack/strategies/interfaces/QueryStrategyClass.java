package com.backend.dolhack.strategies.interfaces;

import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.classs.*;
import com.backend.dolhack.service.cloudinaryService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface QueryStrategyClass {
    public boolean newClassQuery(IDRandomFactory IDRandom, JdbcTemplate sql, cloudinaryService cloudinary, newClassModel clase, String key, MultipartFile file) throws Exception;

    public List<classListModel> listClassQuery(JdbcTemplate sql);

    public InfoClassModel infoClassQuery(JdbcTemplate sql, String id);

    public List<ListClassUser> listClassUserQuery(JdbcTemplate sql,String key) throws Exception;

    public boolean UpdateClassPQuery(JdbcTemplate sql,String key, UpdateClass clase) throws Exception;

    public boolean DeleteClassQuery(JdbcTemplate sql,String id ) throws Exception;

    public int  VerifyRolQuery(JdbcTemplate sql,String id);

    public boolean  VerifyClassDQuery(JdbcTemplate sql,String id);

    public boolean RegisterStudentQuery(JdbcTemplate sql,String idU, String idC);

    public boolean UnRegisterStudentQuery(JdbcTemplate sql,String idU, String idC);

    public List<ListStudentClass> StudentListCQuery(JdbcTemplate sql,String id);

    public boolean PostQuery(cloudinaryService cloudinary,JdbcTemplate sql,String idC, String idU, MultipartFile file, String Text) throws Exception;

    public List<ListPostClass> PostListQuery(JdbcTemplate sql,String id);

    public List<LQuialificationsStudent> getQualificationQuery(JdbcTemplate sql,String idC);

    public List<QualificationStudent> studentQualificationQuery(JdbcTemplate sql,String idU, String idC);

    public ModelClase getClassQuery(JdbcTemplate sql,String id);
}