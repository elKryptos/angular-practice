import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private apiService: ApiService) {}

  heroes?: Hero[]
  selectedHero!: Hero

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.apiService.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(2, 5))
  }

  onSelected(hero: Hero): void {
    this.selectedHero = hero
    console.log(this.selectedHero=hero)
  }

}
