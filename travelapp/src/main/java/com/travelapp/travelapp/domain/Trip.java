package com.travelapp.travelapp.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Data
public class Trip implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tripId;

    @OneToOne
    @NotNull
    @JoinColumn(name = "fk_traveller_id")
    private Traveller traveller;

    @OneToOne
    @NotNull
    @JoinColumn(name = "fk_city_origin_id")
    private City cityOrigin;

    @OneToOne
    @NotNull
    @JoinColumn(name = "fk_city_destination_id")
    private City cityDestination;

    @Column(nullable = false)
    @NotNull
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss.SSS")
    private Date date;

    protected Trip() {}

    public Traveller getTraveller() {
        return traveller;
    }

    public void setTraveller(Traveller traveller) {
        this.traveller = traveller;
    }
}

