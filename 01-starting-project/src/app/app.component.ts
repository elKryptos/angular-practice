import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS
  //per @Output() e @Input()
  selectedUserId?: string

  //ricevo i dati dall'Output()
  onSelectUser(id: string) {
    this.selectedUserId = id
  }

  // @Input()
  get selectedUser() {
    return this.users.find((user) => this.selectedUserId === user.id)!
  }

  


}
