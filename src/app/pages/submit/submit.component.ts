import { Component } from '@angular/core';
import { FormComponent } from '../../components/pages/submit/form/form.component'; 

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {

}
