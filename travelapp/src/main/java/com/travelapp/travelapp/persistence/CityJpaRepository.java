package com.travelapp.travelapp.persistence;

import com.travelapp.travelapp.domain.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;

@RepositoryRestResource
@Component
public interface CityJpaRepository extends JpaRepository<City, Long> {
}
