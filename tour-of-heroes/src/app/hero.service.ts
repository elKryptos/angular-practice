import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heores';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heores = of(HEROES)
    return heores
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(data => data.id === id)!
    return of(hero)
  }
  
}
