package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TMenstruationLog;
import com.ct.hetingzzz.domain.TSysUser;
import com.ct.hetingzzz.repostory.TMenstruationLogRepository;
import com.ct.hetingzzz.repostory.UserRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Date;

@Service
@Transactional
public class UserService {

    @Resource
    private JdbcTemplate jdbcTemplate;
    @Resource
    private UserRepository userRepository;
    @Resource
    private TMenstruationLogRepository tMenstruationLogRepository;

    public boolean todayIsSet(long userid) {
        return tMenstruationLogRepository.countByUserid(userid) > 0;
    }

    public TSysUser getUserByLoginid(String loginid) {
        return userRepository.findByLoginid(loginid);
    }

    public boolean setMenstruation(long userid) {
        if(todayIsSet(userid)){
            return false;
        }
        TMenstruationLog menstruationLog = new TMenstruationLog();
        menstruationLog.setCreatetime(new Date());
        menstruationLog.setMenstruationTime(new Date());
        menstruationLog.setUserid(userid);
        tMenstruationLogRepository.save(menstruationLog);
        return true;
    }
}
