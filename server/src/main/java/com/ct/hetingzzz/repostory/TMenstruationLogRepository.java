package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TMenstruationLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface TMenstruationLogRepository extends JpaRepository<TMenstruationLog, Long>, JpaSpecificationExecutor<TMenstruationLog> {
    Page<TMenstruationLog> findAll(Pageable pageable);
}