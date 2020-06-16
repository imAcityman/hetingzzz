package com.ct.hetingzzz.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "t_sys_user", schema = "heting", catalog = "")
@JsonIgnoreProperties({"roleId","loginid","password","createtime","updatetime"})
public class TSysUser {
    private int id;
    private String name;
    private int roleId;
    private String avatar;
    private String loginid;
    private String password;
    private Integer sex;
    private Timestamp createtime;
    private Timestamp updatetime;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "role_id")
    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    @Basic
    @Column(name = "avatar")
    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Basic
    @Column(name = "loginid")
    public String getLoginid() {
        return loginid;
    }

    public void setLoginid(String loginid) {
        this.loginid = loginid;
    }

    @Basic
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "sex")
    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    @Basic
    @Column(name = "createtime")
    public Timestamp getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Timestamp createtime) {
        this.createtime = createtime;
    }

    @Basic
    @Column(name = "updatetime")
    public Timestamp getUpdatetime() {
        return updatetime;
    }

    public void setUpdatetime(Timestamp updatetime) {
        this.updatetime = updatetime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TSysUser tSysUser = (TSysUser) o;
        return id == tSysUser.id &&
                roleId == tSysUser.roleId &&
                Objects.equals(name, tSysUser.name) &&
                Objects.equals(avatar, tSysUser.avatar) &&
                Objects.equals(loginid, tSysUser.loginid) &&
                Objects.equals(password, tSysUser.password) &&
                Objects.equals(sex, tSysUser.sex) &&
                Objects.equals(createtime, tSysUser.createtime) &&
                Objects.equals(updatetime, tSysUser.updatetime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, roleId, avatar, loginid, password, sex, createtime, updatetime);
    }
}
