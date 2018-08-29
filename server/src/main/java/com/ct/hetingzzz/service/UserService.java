package com.ct.hetingzzz.service;

import com.ct.hetingzzz.repostory.UserRepository;
import com.ct.hetingzzz.domain.TMenstruationLog;
import com.ct.hetingzzz.domain.TSysUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import javax.persistence.criteria.*;
import java.util.LinkedList;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Resource
    private JdbcTemplate jdbcTemplate;
    @Resource
    private UserRepository userRepository;

    public List<TMenstruationLog> getMenstruation(String userid) {
        String sql = "select * from t_menstruation_log t where t.userid = ? order by t.menstruationTime desc ";
        return jdbcTemplate.query(sql, new Object[]{userid}, new BeanPropertyRowMapper<>(TMenstruationLog.class));
    }

    public void setTodayMenstruation(String userid) {
        String sql = "insert into t_menstruation_log (userid, menstruation_time,  createtime) " +
                "values (?,now(),now())";
        jdbcTemplate.update(sql, new Object[]{userid});
    }

    public boolean todayIsSet(String userid) {
        String sql = "select count(1) from t_menstruation_log t where DATE_FORMAT(now(),'%Y-%m-%d') = DATE_FORMAT(t.menstruation_time,'%Y-%m-%d') and userid = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, userid) >= 1;
    }

    public TSysUser getUserByLoginid(String loginid) {
        return userRepository.findByLoginid(loginid);
    }
}
