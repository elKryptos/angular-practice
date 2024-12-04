import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
//quando importo una interface si usa anche "type" se invece è una class non c'è bisogno
import { type NewTaskData } from '../../task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<boolean>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle: string = ''
  enteredSummary: string = ''
  enteredDate: string = ''

  onCancel() {
    this.cancel.emit()
    console.log("emesso " + this.cancel)
  }
  
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

}
