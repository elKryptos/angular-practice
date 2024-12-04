import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { type NewTaskData } from '../task';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }
  private tasks = DUMMY_TASKS

  getUsers(userId: string) {
    this.tasks.filter((task) => task.userId === userId)
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id != id )
  }

}
