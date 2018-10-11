package com.ct.hetingzzz.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "t_message_boad", schema = "heting", catalog = "")
public class TMessageBoad {
    private long id;
    private String content;
    private long targetuserid;
    private int state;
    private long deleteuserid;
    private Date createtime;
    private Date updatetime;
    private TSysUser user;

    @OneToOne(targetEntity = TSysUser.class)
    @JoinColumn(name = "userid", referencedColumnName = "id")
    public TSysUser getUser() {
        return user;
    }

    public void setUser(TSysUser user) {
        this.user = user;
    }
    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
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
    @Column(name = "targetuserid", nullable = false)
    public long getTargetuserid() {
        return targetuserid;
    }

    public void setTargetuserid(long targetuserid) {
        this.targetuserid = targetuserid;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TMessageBoad that = (TMessageBoad) o;
        return id == that.id &&
                targetuserid == that.targetuserid &&
                state == that.state &&
                deleteuserid == that.deleteuserid &&
                Objects.equals(content, that.content) &&
                Objects.equals(createtime, that.createtime) &&
                Objects.equals(updatetime, that.updatetime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, content, targetuserid, state, deleteuserid, createtime, updatetime);
    }
}
