package com.travelapp.travelapp.persistence;

import com.travelapp.travelapp.domain.Traveller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;

@RepositoryRestResource
@Component
public interface TravellerJpaRepository extends JpaRepository<Traveller, Long> {

}
