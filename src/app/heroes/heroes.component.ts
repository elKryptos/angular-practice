import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {

  selectedHero!: Hero
  heroes = HEROES
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };  

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
