package it.objectmethod.heroes.services;

import it.objectmethod.heroes.models.entities.Heroes;
import it.objectmethod.heroes.repositories.HeroesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HeroesService {

    private final HeroesRepository heroesRepository;

    public List<Heroes> getAllHeroes() {
        return heroesRepository.findAll();
    }

    public Heroes getHeroById(long id) {
        return  heroesRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hero not found"));
    }

    public Heroes createHero(Heroes heroes) {
        Heroes hero = new Heroes();
        hero.setName(heroes.getName());
        heroesRepository.save(hero);
        return hero;
    }

    public String updateHero(Heroes heroes) {
        Heroes hero = getHeroById(heroes.getId());
        hero.setName(heroes.getName());
        heroesRepository.save(hero);
        return "Utente updated";
    }
}
