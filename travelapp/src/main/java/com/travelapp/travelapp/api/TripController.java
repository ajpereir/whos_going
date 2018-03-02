package com.travelapp.travelapp.api;

import com.travelapp.travelapp.application.TripService;
import com.travelapp.travelapp.domain.Trip;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/trips")
@CrossOrigin(origins = "http://localhost:3000")
public class TripController {

    private static Logger logger = LoggerFactory.getLogger(TripService.class);

    @Autowired
    private TripService tripService;

    @GetMapping
    public List<Trip> listTrips() {
        return tripService.listTrips();
    }

    @PostMapping
    public Long createTrip(@RequestBody Trip trip) throws Exception{
        return tripService.createTrip(trip);
    }

    @PutMapping("/{tripId}")
    public void editTrip(@PathVariable Long tripId, @RequestBody Trip trip) throws Exception{
        tripService.editTrip(tripId, trip);
    }

    @DeleteMapping("/{tripId}")
    public void deleteTrip(@PathVariable Long tripId) throws Exception{
        tripService.deleteTrip(tripId);
    }
}
