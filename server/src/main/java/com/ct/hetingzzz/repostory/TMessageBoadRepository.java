package com.ct.hetingzzz.repostory;

import com.ct.hetingzzz.domain.TMessageBoad;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TMessageBoadRepository extends JpaRepository<TMessageBoad, Long>, JpaSpecificationExecutor<TMessageBoad> {
    Page<TMessageBoad> findAll(Pageable pageable);

    <S extends TMessageBoad> List<S> findAllByStateAndFatherMessageIsNullOrderByCreatetimeDesc(@Param("state") int state);

    @Override
    <S extends TMessageBoad> S save(S s);

    @Override
    void deleteById(Long aLong);

    @Modifying
    @Query("update TMessageBoad set state = 0,deleteuserid=:deleteUserid where id=:id")
    void update2Delete(@Param("id") long id,@Param("deleteUserid") long deleteUserid);
}