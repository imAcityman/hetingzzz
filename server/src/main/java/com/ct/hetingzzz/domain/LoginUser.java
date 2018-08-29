package com.ct.hetingzzz.domain;

import java.io.Serializable;

public class LoginUser implements Serializable {

    private static final long serialVersionUID = 288232946557523962L;
    private Long userId;
    private String name;
    private Long roleId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }
}
