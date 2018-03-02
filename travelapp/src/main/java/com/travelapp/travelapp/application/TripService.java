package com.travelapp.travelapp.application;

import com.travelapp.travelapp.domain.Traveller;
import com.travelapp.travelapp.domain.Trip;
import com.travelapp.travelapp.exceptions.*;
import com.travelapp.travelapp.persistence.TripJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class TripService {
    private static Logger logger = LoggerFactory.getLogger(TripService.class);

    @Autowired
    private TripJpaRepository tripJpaRepository;

    public List<Trip> listTrips() {
        logger.info("Trips List Accessed");
        return tripJpaRepository.findAll();
    }

    public Long createTrip(Trip trip) throws TripAlreadyExistsException,
                                             TravellerAlreadyHasTripAtDateException,
                                             SameCityOriginAndDestinationException,
                                             PastTimeException{
        List checkTripTravellerAndTime = tripJpaRepository.findByTravellerAndDate(trip.getTraveller(),
                                                                                  trip.getDate());
        List checkAllTripParameters = tripJpaRepository.findByTravellerAndCityOriginAndCityDestinationAndDate(trip.getTraveller(),
                                                                                                 trip.getCityOrigin(),
                                                                                                 trip.getCityDestination(),
                                                                                                 trip.getDate());
        Date currentDate = new Date();
        long specifiedDate = trip.getDate().getTime();

        if(checkAllTripParameters.size() != 0) {
            throw new TripAlreadyExistsException("Trip Already Exists");
        } else if (checkTripTravellerAndTime.size() != 0) {
            throw new TravellerAlreadyHasTripAtDateException("Traveller already has a scheduled trip at given date");
        } else if (trip.getCityOrigin().getCityId().equals(trip.getCityDestination().getCityId())) {
            throw new SameCityOriginAndDestinationException("City Origin and City Destination can't be the same");
        } else if (currentDate.getTime() > specifiedDate) {
            throw new PastTimeException("Specified date is before current date");
        } else {
            tripJpaRepository.save(trip);
            logger.info("Trip added with id: " + trip.getTripId());
            return trip.getTripId();
        }
    }


    public void editTrip(Long tripId, Trip trip) throws Exception{
        Trip dbTrip = tripJpaRepository.findOne(tripId);
        if( dbTrip == null) {
            throw new TripDoesNotExistException("Trip does not exist");
        } else {
            dbTrip.setTraveller(trip.getTraveller());
            dbTrip.setCityOrigin(trip.getCityOrigin());
            dbTrip.setCityDestination(trip.getCityDestination());
            tripJpaRepository.save(dbTrip);
            logger.info("Trip with id " + tripId + " edited");
        }
    }

    public void deleteTrip(Long tripId) throws Exception{
        Trip dbTrip = tripJpaRepository.findOne(tripId);
        if( dbTrip == null) {
            throw new TripDoesNotExistException("Trip does not exist");
        } else {
            tripJpaRepository.delete(tripId);
            logger.info("Trip with id " + tripId + " deleted");
        }
    }
}
