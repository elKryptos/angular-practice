import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { DUMMY_USERS } from './dummy-users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getUsers(): Observable<User[]> {
    const users = of(DUMMY_USERS)
    return users
  }
}
