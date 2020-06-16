package com.ct.hetingzzz.domain;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "t_gasoline_detail", schema = "heting", catalog = "")
public class TGasolineDetail {
    private int id;
    private int gasId;
    private String city;
    private BigDecimal qy89;
    private BigDecimal qy92;
    private BigDecimal qy95;
    private BigDecimal qy98;
    private BigDecimal cy0;
    private Long createTime;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "gas_id")
    public int getGasId() {
        return gasId;
    }

    public void setGasId(int gasId) {
        this.gasId = gasId;
    }

    @Basic
    @Column(name = "city")
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Basic
    @Column(name = "qy_89")
    public BigDecimal getQy89() {
        return qy89;
    }

    public void setQy89(BigDecimal qy89) {
        this.qy89 = qy89;
    }

    @Basic
    @Column(name = "qy_92")
    public BigDecimal getQy92() {
        return qy92;
    }

    public void setQy92(BigDecimal qy92) {
        this.qy92 = qy92;
    }

    @Basic
    @Column(name = "qy_95")
    public BigDecimal getQy95() {
        return qy95;
    }

    public void setQy95(BigDecimal qy95) {
        this.qy95 = qy95;
    }

    @Basic
    @Column(name = "qy_98")
    public BigDecimal getQy98() {
        return qy98;
    }

    public void setQy98(BigDecimal qy98) {
        this.qy98 = qy98;
    }

    @Basic
    @Column(name = "cy_0")
    public BigDecimal getCy0() {
        return cy0;
    }

    public void setCy0(BigDecimal cy0) {
        this.cy0 = cy0;
    }

    @Basic
    @Column(name = "create_time")
    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {
        this.createTime = createTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TGasolineDetail that = (TGasolineDetail) o;
        return id == that.id &&
                gasId == that.gasId &&
                Objects.equals(city, that.city) &&
                Objects.equals(qy89, that.qy89) &&
                Objects.equals(qy92, that.qy92) &&
                Objects.equals(qy95, that.qy95) &&
                Objects.equals(qy98, that.qy98) &&
                Objects.equals(cy0, that.cy0) &&
                Objects.equals(createTime, that.createTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, gasId, city, qy89, qy92, qy95, qy98, cy0, createTime);
    }
}
