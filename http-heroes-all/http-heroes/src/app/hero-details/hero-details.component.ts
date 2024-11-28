import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common'
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {

  constructor(
    private location: Location,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  @Input() hero?: Hero

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const idparm = this.route.snapshot.paramMap.get('id')
    const id = Number(idparm)

    if (isNaN(id) || id <= 0) {
      return
    }

    this.apiService.getHero(id)
    .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

}
