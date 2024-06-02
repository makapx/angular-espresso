import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CoffeeOrigin } from '../../../../types/coffeeOrigin.enum';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [FormBuilder],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  coffeeForm: FormGroup;
  coffeeOrigins = CoffeeOrigin;

  // Flag to check if the form is submitted.
  // Used to show success message and hide the form
  // TODO: We can improve component re-usability and incapsulation by using @Input() and @Output() decorators
  // and emit submit event to the parent component
  // At this point parent will decide to show the success message or not
  isSubmitted = false;

  // Inject FormBuilder service to create the form
  constructor(private formBuilder: FormBuilder) {
    this.coffeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  /**
   * On form submit
   *
   * @returns {void}
   */
  onSubmit() {
    // No need to pass and event object to the function, bc the form is already bound to the component
    // and the form values are available in the component

    // Set the flag to true to show the success message
    this.isSubmitted = true;
    console.log('Form submitted:', this.coffeeForm.value);
    console.log('Is form valid?', this.coffeeForm.valid);
  }
}
