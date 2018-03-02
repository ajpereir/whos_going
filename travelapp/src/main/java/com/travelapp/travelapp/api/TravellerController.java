package com.travelapp.travelapp.api;

import com.travelapp.travelapp.domain.Traveller;
import com.travelapp.travelapp.persistence.TravellerJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/traveller")
@CrossOrigin(origins = "http://localhost:3000")
public class TravellerController {

    @Autowired
    private TravellerJpaRepository travellerJpaRepository;

    @GetMapping
    public List<Traveller> findAll() {
        return travellerJpaRepository.findAll();
    }

//    @RequestMapping("/save")
//    public String AddTraveller() {
//        travellerJpaRepository.save(new Traveller("Joaquim"));
//
//        return "Traveller Added!";
//    }

}
