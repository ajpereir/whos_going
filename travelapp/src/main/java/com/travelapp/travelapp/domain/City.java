package com.travelapp.travelapp.domain;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class City implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long cityId;

    @Column(nullable = false)
    private String cityName;

    protected City() {}

    public City(String name) {
        this.cityName = name;
    }

}
