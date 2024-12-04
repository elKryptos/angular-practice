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

  getUserTasks(user: User){
    return this.tasks.filter((task) => task.userId === user.id)
  }

  addTask(taskData: NewTaskData, user: User) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: user.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
  }

  deleteTask(userId: string) {
    this.tasks = this.tasks.filter((task) => task.id != userId )
  }
}
