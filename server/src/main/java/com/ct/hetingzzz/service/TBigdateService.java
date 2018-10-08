package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TBigdate;
import com.ct.hetingzzz.repostory.TBigdateRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class TBigdateService {

    @Resource
    private TBigdateRepository tBigdateRepository;

    public List<TBigdate> getBigDate(long userid){
        return tBigdateRepository.findAllByUseridOrderById(userid);
    }
}