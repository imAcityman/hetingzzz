package com.ct.hetingzzz.domain;


public class TMenstruationLog {

  private long id;
  private long userid;
  private java.sql.Date menstruationTime;
  private String remark;
  private java.sql.Timestamp createtime;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public long getUserid() {
    return userid;
  }

  public void setUserid(long userid) {
    this.userid = userid;
  }


  public java.sql.Date getMenstruationTime() {
    return menstruationTime;
  }

  public void setMenstruationTime(java.sql.Date menstruationTime) {
    this.menstruationTime = menstruationTime;
  }


  public String getRemark() {
    return remark;
  }

  public void setRemark(String remark) {
    this.remark = remark;
  }


  public java.sql.Timestamp getCreatetime() {
    return createtime;
  }

  public void setCreatetime(java.sql.Timestamp createtime) {
    this.createtime = createtime;
  }

}
