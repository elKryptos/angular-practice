package it.objectmethod.heroes.controllers;

import it.objectmethod.heroes.models.entities.Heroes;
import it.objectmethod.heroes.services.HeroesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/heroes")
public class HeroesController {

    private final HeroesService heroesService;

    @GetMapping("/all")
    public ResponseEntity<List<Heroes>> getAllHeroes() {
        List<Heroes> heroes = heroesService.getAllHeroes();
        return new ResponseEntity<>(heroes, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Heroes> createHero(@RequestBody Heroes heroes) {
        Heroes createHero = heroesService.createHero(heroes);
        return new ResponseEntity<>(createHero, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Heroes> getHeroById(@PathVariable long id) {
        Heroes heroes = heroesService.getHeroById(id);
        return new ResponseEntity<>(heroes, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Heroes> updateHero(@RequestBody Heroes heroes) {
        heroesService.updateHero(heroes);
        return new ResponseEntity<>(heroes, HttpStatus.OK);
    }
}
