import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {

  constructor(
    private heroService: HeroService, 
    private route: ActivatedRoute, 
    private location: Location
  ) {}

  @Input() hero?: Hero

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero)    
  }

  goBack(): void {
    this.location.back();
  }

}
