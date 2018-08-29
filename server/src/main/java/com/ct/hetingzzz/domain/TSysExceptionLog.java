package com.ct.hetingzzz.domain;


public class TSysExceptionLog {

  private long id;
  private long type;
  private String cause;
  private String stacktrace;
  private String header;
  private String ip;
  private String parameter;
  private java.sql.Timestamp createtime;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public long getType() {
    return type;
  }

  public void setType(long type) {
    this.type = type;
  }


  public String getCause() {
    return cause;
  }

  public void setCause(String cause) {
    this.cause = cause;
  }


  public String getStacktrace() {
    return stacktrace;
  }

  public void setStacktrace(String stacktrace) {
    this.stacktrace = stacktrace;
  }


  public String getHeader() {
    return header;
  }

  public void setHeader(String header) {
    this.header = header;
  }


  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }


  public String getParameter() {
    return parameter;
  }

  public void setParameter(String parameter) {
    this.parameter = parameter;
  }


  public java.sql.Timestamp getCreatetime() {
    return createtime;
  }

  public void setCreatetime(java.sql.Timestamp createtime) {
    this.createtime = createtime;
  }

}
