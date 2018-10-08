package com.ct.hetingzzz.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "t_bigdate", schema = "heting", catalog = "")
@JsonIgnoreProperties({"id","createtime","userid"})
public class TBigdate {
    private long id;
    private String title;
    private Date datetime;
    private Timestamp createtime;
    private long userid;

    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Basic
    @Column(name = "title", nullable = false, length = 50)
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "datetime", nullable = false)
    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    @Basic
    @Column(name = "createtime", nullable = false)
    public Timestamp getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Timestamp createtime) {
        this.createtime = createtime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TBigdate tBigdate = (TBigdate) o;
        return id == tBigdate.id &&
                Objects.equals(title, tBigdate.title) &&
                Objects.equals(datetime, tBigdate.datetime) &&
                Objects.equals(createtime, tBigdate.createtime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, datetime, createtime);
    }

    @Basic
    @Column(name = "userid", nullable = false)
    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }
}
