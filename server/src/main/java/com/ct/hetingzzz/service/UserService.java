package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TMenstruationLog;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Resource
    private JdbcTemplate jdbcTemplate;

    public List<TMenstruationLog> getMenstruation(String userid){
        String sql = "select * from t_menstruation_log t where t.userid = ? order by t.createtime desc ";
        return jdbcTemplate.query(sql,new Object[]{userid},new BeanPropertyRowMapper<>(TMenstruationLog.class));
    }
}
