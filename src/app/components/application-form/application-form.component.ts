import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  standalone: true,
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ApplicationFormComponent {
  message: string = '';

  submitApplication(form: NgForm) {
    if (form.valid) {
      this.message = 'Спасибо большое за оставленную заявку! Наш администратор с вами свяжется.';
      form.reset();
    }
  }
}





