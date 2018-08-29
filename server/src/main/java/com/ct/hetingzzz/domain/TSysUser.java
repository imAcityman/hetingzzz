package com.ct.hetingzzz.domain;


import javax.persistence.*;
import java.sql.Timestamp;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "t_sys_user", schema = "heting", catalog = "")
public class TSysUser {

    private long id;
    private String name;
    private long roleId;
    private String loginid;
    private String password;
    private Timestamp createtime;
    private Timestamp updatetime;

    private List<TMenstruationLog> MenstruationLogs;

    public void setId(int id) {
        this.id = id;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
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
    @Column(name = "name", nullable = false, length = 255)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Basic
    @Column(name = "roleId", nullable = false)
    public long getRoleId() {
        return roleId;
    }

    public void setRoleId(long roleId) {
        this.roleId = roleId;
    }


    @Basic
    @Column(name = "loginid", nullable = false, length = 100)
    public String getLoginid() {
        return loginid;
    }

    public void setLoginid(String loginid) {
        this.loginid = loginid;
    }


    @Basic
    @Column(name = "password", nullable = false, length = 255)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @Basic
    @Column(name = "createtime", nullable = false)
    public Timestamp getCreatetime() {
        return createtime;
    }

    public void setCreatetime(Timestamp createtime) {
        this.createtime = createtime;
    }


    @Basic
    @Column(name = "updatetime", nullable = true)
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
                Objects.equals(loginid, tSysUser.loginid) &&
                Objects.equals(password, tSysUser.password) &&
                Objects.equals(createtime, tSysUser.createtime) &&
                Objects.equals(updatetime, tSysUser.updatetime);
    }

//    @OneToMany
//    @JoinTable(name = "t_menstruation_log",joinColumns = {@JoinColumn(name = "id", referencedColumnName = "userid")})
//    public List<TMenstruationLog> getMenstruationLogs() {
//        return MenstruationLogs;
//    }

    public void setMenstruationLogs(List<TMenstruationLog> menstruationLogs) {
        MenstruationLogs = menstruationLogs;
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, roleId, loginid, password, createtime, updatetime);
    }
}
