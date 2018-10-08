package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TMenstruationLog;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface TMenstruationLogRepository extends JpaRepository<TMenstruationLog, Long>, JpaSpecificationExecutor<TMenstruationLog> {
    Page<TMenstruationLog> findAll(Pageable pageable);

    @Query("select count(t.id) from TMenstruationLog t where t.userid = :userid and TO_DAYS(t.menstruationTime) = TO_DAYS(now())")
    int countByUserid(@Param("userid") long userid);

    @Override
    <S extends TMenstruationLog> S save(S s);

    <S extends TMenstruationLog> List<S> findAllByUseridOrderByMenstruationTimeDesc(long userid);
}