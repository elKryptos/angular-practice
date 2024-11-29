import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { User } from '../user';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required : true}) user!: User
  tasks = DUMMY_TASKS  //passo i dati a task con il suo @Input()
  isAddingTask: boolean = false

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  //al posto di usare tasks creo una funzione che mi filtra e 
  //mostra i task relativi a ogni utente in base al suo id e quindi lo uso nel *ngFor
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id)
  }

  //gestico i dati che arrivano da task con il suo @Output()
  //per togliere il task completato
  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id != id )
  }

  onStartAddTask() {
    this.isAddingTask = true
  }

  onCancelAddTask() {
    this.isAddingTask = false
  }

}
