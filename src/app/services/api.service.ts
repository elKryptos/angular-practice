import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>('http://localhost:8080/heroes/all')
  // }

}
