package com.travelapp.travelapp.persistence;

import com.travelapp.travelapp.domain.City;
import com.travelapp.travelapp.domain.Traveller;
import com.travelapp.travelapp.domain.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@RepositoryRestResource
@Component
public interface TripJpaRepository extends JpaRepository<Trip, Long>{
    List<Trip> findByTravellerAndCityOriginAndCityDestinationAndDate(Traveller traveller, City cityOrigin, City cityDestination, Date date);
    List<Trip> findByTravellerAndDate(Traveller traveller, Date date);
}
