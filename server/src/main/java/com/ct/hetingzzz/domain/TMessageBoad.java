package com.ct.hetingzzz.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "t_message_boad", schema = "heting", catalog = "")
@JsonIgnoreProperties({"deleteuserid"})
public class TMessageBoad {
    private int id;
    private String content;
    private long userid;
    private int state;
    private long deleteuserid;
    private Date createtime;
    private Date updatetime;
    private Integer replyid;
    private long targetuserid;

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public void setDeleteuserid(Integer deleteuserid) {
        this.deleteuserid = deleteuserid;
    }

    public void setCreatetime(Timestamp createtime) {
        this.createtime = createtime;
    }

    public void setUpdatetime(Timestamp updatetime) {
        this.updatetime = updatetime;
    }

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "content", nullable = false, length = -1)
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Basic
    @Column(name = "userid", nullable = false)
    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    @Basic
    @Column(name = "state", nullable = false)
    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    @Basic
    @Column(name = "deleteuserid", nullable = true)
    public long getDeleteuserid() {
        return deleteuserid;
    }

    public void setDeleteuserid(long deleteuserid) {
        this.deleteuserid = deleteuserid;
    }

    @Basic
    @Column(name = "createtime", nullable = false)
    public Date getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Date createtime) {
        this.createtime = createtime;
    }

    @Basic
    @Column(name = "updatetime", nullable = true)
    public Date getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Date updatetime) {
        this.updatetime = updatetime;
    }

    @Basic
    @Column(name = "replyid", nullable = true)
    public Integer getReplyid() {
        return replyid;
    }

    public void setReplyid(Integer replyid) {
        this.replyid = replyid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TMessageBoad that = (TMessageBoad) o;
        return id == that.id &&
                userid == that.userid &&
                state == that.state &&
                deleteuserid == that.deleteuserid &&
                Objects.equals(content, that.content) &&
                Objects.equals(createtime, that.createtime) &&
                Objects.equals(updatetime, that.updatetime) &&
                Objects.equals(replyid, that.replyid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, content, userid, state, deleteuserid, createtime, updatetime, replyid);
    }

    @Basic
    @Column(name = "targetuserid", nullable = false)
    public long getTargetuserid() {
        return targetuserid;
    }

    public void setTargetuserid(long targetuserid) {
        this.targetuserid = targetuserid;
    }
}
