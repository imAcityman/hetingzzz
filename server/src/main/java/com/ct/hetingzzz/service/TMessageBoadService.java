package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.TMessageBoad;
import com.ct.hetingzzz.repostory.TMessageBoadRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class TMessageBoadService {

    @Resource
    private TMessageBoadRepository tMessageBoadRepository;

    public TMessageBoad save(TMessageBoad messageBoad){
        return tMessageBoadRepository.save(messageBoad);
    }

    public List<TMessageBoad> findAll(long userid) {
        return tMessageBoadRepository.findAllByTargetuserid(userid);
    }
}