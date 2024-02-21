package com.backend.dolhack.repositories;

import java.util.List;

import com.backend.dolhack.strategies.interfaces.QueryStrategyClass;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.backend.dolhack.lib.IDRandomFactory;
import com.backend.dolhack.models.classs.InfoClassModel;
import com.backend.dolhack.models.classs.LQuialificationsStudent;
import com.backend.dolhack.models.classs.ListClassUser;
import com.backend.dolhack.models.classs.ListPostClass;
import com.backend.dolhack.models.classs.ListStudentClass;
import com.backend.dolhack.models.classs.ModelClase;
import com.backend.dolhack.models.classs.QualificationStudent;
import com.backend.dolhack.models.classs.UpdateClass;
import com.backend.dolhack.models.classs.classListModel;
import com.backend.dolhack.models.classs.newClassModel;
import com.backend.dolhack.service.cloudinaryService;

@Repository
public class ClassRepositorio {
    private final JdbcTemplate sql;
    private final cloudinaryService cloudinary;
    private final IDRandomFactory IDRandom;

    private final QueryStrategyClass queryStrategyClass;
 
    @Autowired
    public ClassRepositorio(JdbcTemplate sql, cloudinaryService cloudinary, IDRandomFactory IDRandom, QueryStrategyClass queryStrategyClass){
        this.sql = sql;
        this.cloudinary = cloudinary;
        this.IDRandom = IDRandom;
        this.queryStrategyClass = queryStrategyClass;
    }
    
    public boolean newClass(newClassModel clase, String key, MultipartFile file) throws Exception{
        return queryStrategyClass.newClassQuery(IDRandom, sql, cloudinary, clase, key, file);
    }

    public List<classListModel> listClass(){
        return queryStrategyClass.listClassQuery(sql);
    }

    public InfoClassModel infoClass(String id){
        return queryStrategyClass.infoClassQuery(sql, id);
    }

    public List<ListClassUser> listClassUser(String key) throws Exception{
        return queryStrategyClass.listClassUserQuery(sql, key);
    }

    public boolean UpdateClassP(String key, UpdateClass clase) throws Exception{
        return queryStrategyClass.UpdateClassPQuery(sql, key, clase);
    }

    public boolean DeleteClass(String id ) throws Exception{
        return queryStrategyClass.DeleteClassQuery(sql, id);
    }

    public int  VerifyRol(String id){
        return queryStrategyClass.VerifyRolQuery(sql, id);
    }

    public boolean  VerifyClassD(String id){
        return queryStrategyClass.VerifyClassDQuery(sql, id);
   }

    public boolean RegisterStudent(String idU, String idC){
        return queryStrategyClass.RegisterStudentQuery(sql, idU, idC);
    }

    public boolean UnRegisterStudent(String idU, String idC){
        return queryStrategyClass.UnRegisterStudentQuery(sql, idU, idC);
    }

    public List<ListStudentClass> StudentListC(String id){
        return queryStrategyClass.StudentListCQuery(sql, id);
    }

    public boolean Post(String idC, String idU, MultipartFile file, String Text) throws Exception{
        return queryStrategyClass.PostQuery(cloudinary,sql , idC, idU, file, Text);
    }

    public List<ListPostClass> PostList(String id){
        return queryStrategyClass.PostListQuery(sql, id);
    }

    public List<LQuialificationsStudent> getQualification(String idC){
        return queryStrategyClass.getQualificationQuery(sql, idC);
    }

    public List<QualificationStudent> studentQualification(String idU, String idC){
        return queryStrategyClass.studentQualificationQuery(sql, idU, idC);
    }

    public ModelClase getClass(String id){
        return queryStrategyClass.getClassQuery(sql, id);
    }
}
