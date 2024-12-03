import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: User
  @Input({ required: true }) selected!: boolean
  @Output() select = new EventEmitter<string>() 
  //select = output<string>() fa la stessa cosa che quella sopra ma più recente 

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
 
  //funzione che invia dati tramite @Output()
  onSelectUser(): void {
    this.select.emit(this.user.id)
    console.log(this.user.id)
  }
}
