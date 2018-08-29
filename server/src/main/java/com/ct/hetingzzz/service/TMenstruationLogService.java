package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TMenstruationLog;
import com.ct.hetingzzz.repostory.TMenstruationLogRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

@Service
@Transactional
public class TMenstruationLogService {

    @Resource
    private TMenstruationLogRepository tMenstruationLogRepository;

}