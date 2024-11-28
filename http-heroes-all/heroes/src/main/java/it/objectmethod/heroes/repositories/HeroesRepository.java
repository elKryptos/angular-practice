package it.objectmethod.heroes.repositories;

import it.objectmethod.heroes.models.entities.Heroes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HeroesRepository extends JpaRepository<Heroes, Long> {
    List<Heroes> id(Long id);
}
