import { Component } from '@angular/core';
import { LIST_USERS } from './list-user';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Input()/@Output()';
  // 1) prendo i dati dell'array che saranno usati dal
  //    componente figlio con @Input()
  users = LIST_USERS;
  //7) Creo la variabile che verrà usata durante l'Output()
  //e allo stesso momento verrà usata da detail components con il suo @Input()
  selectedUser!: User
  //8) Gestico i dati che arrivano dall'Output()
  onUserRecieved(user: User) {
    this.selectedUser = user
  }

}
