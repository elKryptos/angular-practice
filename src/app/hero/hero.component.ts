import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private heroService: HeroService) {}

  heroes: Hero[] = []
  selectedHero?: Hero

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  onSelected(hero: Hero) : void {
    this.selectedHero = hero
    console.log(hero)
  } 


}
