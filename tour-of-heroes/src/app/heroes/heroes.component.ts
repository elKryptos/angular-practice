import { Component,  } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = []
  selectedHero?: Hero

  onSelected(hero: Hero): void {
    this.selectedHero = hero 
  }
  

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void { 
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes
    )
    
  }

}
