package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TBigdate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface TBigdateRepository extends JpaRepository<TBigdate, Long>, JpaSpecificationExecutor<TBigdate> {

    List<TBigdate> findAllByOrderByDatetimeDesc();

}