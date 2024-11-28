import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent {
  
  hero: Hero = new Hero()
  error!: string
  message!: string

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  createHero() {
    console.log(this.hero)
    if(!this.hero?.name || this.hero.name.trim() === "") {
     this.error="Fill The Blank!!"
     return
    }

    this.error = ""

    this.apiService.postHero(this.hero).subscribe({
      next: (hero) => {
        this.hero = hero
        this.message = "Hero created successfully"
        this.router.navigateByUrl("/heroes")
      },
      error: (err) => {
        this.error = "Error in DB!"
        console.log("Error: ", err)
      },
      complete: () => {
        console.log("Request Complete")
      }
  })

  }







}
