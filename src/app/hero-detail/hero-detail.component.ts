import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location //servizio interagisce browser, permette il go back
  ) {}

  @Input() hero: Hero | undefined

   //hero: Hero | undefined

ngOnInit(): void {
  this.getHero()
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(
    hero => this.hero = hero
  )
}

}
