package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.Pagination;
import com.ct.hetingzzz.domain.TMessageBoad;
import com.ct.hetingzzz.repostory.TMessageBoadRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

import org.springframework.data.domain.Page;

@Service
@Transactional
public class TMessageBoadService {

    @Resource
    private TMessageBoadRepository tMessageBoadRepository;

    public TMessageBoad save(TMessageBoad messageBoad) {
        return tMessageBoadRepository.save(messageBoad);
    }

    public Page<TMessageBoad> getMessage(Pagination pagination) {
        return tMessageBoadRepository.findAllByStateAndFatherMessageIsNullOrderByCreatetimeDesc(1, pagination.toPage());
    }

    public void deleteMessage(long id, long deleteUserid) {
        tMessageBoadRepository.update2Delete(id, deleteUserid);
    }
}