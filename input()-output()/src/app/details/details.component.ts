import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  //uso @Input
  @Input({required: true}) user!: User

}
