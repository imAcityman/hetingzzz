package com.ct.hetingzzz.service;

import com.ct.hetingzzz.domain.Pagination;
import com.ct.hetingzzz.domain.TGasoline;
import com.ct.hetingzzz.repostory.TGasolineRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

@Service
@Transactional
public class LifeService {

    @Resource
    private TGasolineRepository gasolineRepository;

    public List<TGasoline> getLatestInfo() {
        return gasolineRepository.findAllByOrderByIdDesc(new Pagination(1, 1).toPage()).getContent();
    }
}
