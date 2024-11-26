import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = []

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void { 
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
