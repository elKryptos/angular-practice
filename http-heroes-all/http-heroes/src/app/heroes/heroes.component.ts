import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  constructor(private apiService: ApiService) {}

  heroes?: Hero[]
  selectedHero?: Hero

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.apiService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }

  // onSelected(hero: Hero): void {
  //   this.selectedHero = hero
  // }

}
