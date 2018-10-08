package com.ct.hetingzzz.domain;


import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "t_menstruation_log", schema = "heting", catalog = "")
public class TMenstruationLog {

  private long id;
  private long userid;
  private Date menstruationTime;
  private String remark;
  private Date createtime;

  public void setId(int id) {
    this.id = id;
  }

  @Id
  @Column(name = "id", nullable = false)
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


  @Basic
  @Column(name = "menstruationTime", nullable = false)
  public Date getMenstruationTime() {
    return menstruationTime;
  }

  public void setMenstruationTime(Date menstruationTime) {
    this.menstruationTime = menstruationTime;
  }


  @Basic
  @Column(name = "remark", nullable = true, length = 255)
  public String getRemark() {
    return remark;
  }

  public void setRemark(String remark) {
    this.remark = remark;
  }


  @Basic
  @Column(name = "createtime", nullable = false)
  public Date getCreatetime() {
    return createtime;
  }

  public void setCreatetime(Date createtime) {
    this.createtime = createtime;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    TMenstruationLog that = (TMenstruationLog) o;
    return id == that.id &&
            Objects.equals(menstruationTime, that.menstruationTime) &&
            Objects.equals(remark, that.remark) &&
            Objects.equals(createtime, that.createtime);
  }

  @Override
  public int hashCode() {

    return Objects.hash(id, menstruationTime, remark, createtime);
  }
}
