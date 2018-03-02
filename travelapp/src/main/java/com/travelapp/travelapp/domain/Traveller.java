package com.travelapp.travelapp.domain;

import com.travelapp.travelapp.application.TripService;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class Traveller implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long travellerId;

    @Column(nullable = false)
    private String travellerName;

    protected Traveller() {}

    public Traveller(String name) {
        this.travellerName = name;
    }

}
