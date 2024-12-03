import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //2) Uso @Input() per poter avere accesso ai dati dal componente padre
  @Input({required: true}) user!: User;
  //4) Creo @Output() per inviare dati di tipo User
  @Output() userSelected = new EventEmitter<User>()

  //6) Gestico la funzione del click che emmette dei dati e a sua volta
  //   i dati inviati devono essere gestiti nel app.componte.ts in questo caso
  onUserSelected(user: User) {
    this.userSelected.emit(user)
  }

}
