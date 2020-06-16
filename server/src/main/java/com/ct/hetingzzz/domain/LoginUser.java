package com.ct.hetingzzz.domain;

import java.io.Serializable;

public class LoginUser implements Serializable {

    private static final long serialVersionUID = 288232946557523962L;
    private Integer userId;
    private String name;
    private Integer roleId;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }
}
