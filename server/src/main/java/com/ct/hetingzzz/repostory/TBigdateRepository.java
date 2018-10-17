package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TBigdate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface TBigdateRepository extends JpaRepository<TBigdate, Long>, JpaSpecificationExecutor<TBigdate> {
    Page<TBigdate> findAll(Pageable pageable);

    List<TBigdate> findAllOrderById(long userid);

    @Override
    List<TBigdate> findAll();
}