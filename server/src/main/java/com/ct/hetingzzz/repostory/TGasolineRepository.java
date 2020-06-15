package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TGasoline;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TGasolineRepository extends JpaRepository<TGasoline, Long>, JpaSpecificationExecutor<TGasoline> {

    Page<TGasoline> findAllByOrderByIdDesc(Pageable p);
}
