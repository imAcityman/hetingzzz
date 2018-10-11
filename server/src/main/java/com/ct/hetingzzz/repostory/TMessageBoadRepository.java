package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TMessageBoad;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TMessageBoadRepository extends JpaRepository<TMessageBoad, Long>, JpaSpecificationExecutor<TMessageBoad> {
    Page<TMessageBoad> findAll(Pageable pageable);

    <S extends TMessageBoad> List<S> findAllByTargetuseridOrderByCreatetimeDesc(@Param("targetuserid")long targetuserid);

    @Override
    <S extends TMessageBoad> S save(S s);
}