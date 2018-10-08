package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TMenstruationLog;
import com.ct.hetingzzz.repostory.TMenstruationLogRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class TMenstruationLogService {

    @Resource
    private TMenstruationLogRepository tMenstruationLogRepository;

    public List<TMenstruationLog> getMenstruation(long userid) {
        return tMenstruationLogRepository.findAllByUseridOrderByMenstruationTimeDesc(userid);
    }
}