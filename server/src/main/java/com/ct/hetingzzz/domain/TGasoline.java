package com.ct.hetingzzz.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "t_gasoline", schema = "heting", catalog = "")
public class TGasoline {
    private int id;
    private Date date;
    private String remark;
    private List<TGasolineDetail> details;

    @OneToMany(targetEntity = TGasolineDetail.class)
    @JoinColumn(name = "gas_id", referencedColumnName = "id")
    public List<TGasolineDetail> getDetails() {
        return details;
    }

    public void setDetails(List<TGasolineDetail> details) {
        this.details = details;
    }

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "date")
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Basic
    @Column(name = "remark")
    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TGasoline tGasoline = (TGasoline) o;
        return id == tGasoline.id &&
                Objects.equals(date, tGasoline.date) &&
                Objects.equals(remark, tGasoline.remark);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, remark);
    }
}
