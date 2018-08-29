package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TSysUser;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<TSysUser,Long> {

    Page<TSysUser> findAll(Pageable pageable);

    TSysUser findByLoginid(String loginid);
}
