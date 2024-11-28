import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) id!: string
  @Input({ required: true }) avatar!: string 
  @Input({ required: true }) name!: string
  @Output() select = new EventEmitter<string>() 
  //select = output<string>() fa la stessa cosa che quella sopra ma più recente 

  get imagePath() {
    return 'assets/users/' + this.avatar
  }
 
  onSelectUser(): void {
    this.select.emit(this.id)
  }
}
