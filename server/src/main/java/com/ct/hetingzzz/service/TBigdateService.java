package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TBigdate;
import com.ct.hetingzzz.repostory.TBigdateRepository;
import com.ct.hetingzzz.util.Contants;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TBigdateService {

    @Resource
    private TBigdateRepository tBigdateRepository;

    public List<TBigdate> getBigDate(long userid){
        return tBigdateRepository.findAllByOrderByDatetimeDesc();
    }

    public void add(TBigdate bigdate){
        tBigdateRepository.save(bigdate);
    }

    public void update(TBigdate bigdate){
        TBigdate _bigdate = tBigdateRepository.findById(bigdate.getId()).get();
        _bigdate.setDatetime(bigdate.getDatetime());
        _bigdate.setTitle(bigdate.getTitle());
        _bigdate.setIsGood(bigdate.getIsGood());
        _bigdate.setUserid(Contants.getUserId());
        tBigdateRepository.save(_bigdate);
    }

    public void delete(long id){
        tBigdateRepository.deleteById(id);
    }
}