import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  imports: [CommonModule, FormsModule]
})
export class AddStudentComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;

  name: string = '';
  email: string = '';
  phone: string = '';
  faculty: string = '';

  constructor(private studentService: StudentService) {}

  addStudent() {
    if (this.name.trim() && this.email.trim() && this.phone.trim() && this.faculty.trim()) {
      const newStudent: Student = {
        id: Date.now(),
        name: this.name.trim(),
        email: this.email.trim(),
        phone: this.phone.trim(),
        faculty: this.faculty.trim()
      };

      this.studentService.addStudent(newStudent);
      console.log('Добавлен студент:', newStudent);

      this.name = '';
      this.email = '';
      this.phone = '';
      this.faculty = '';

      this.nameInput.nativeElement.focus();
    }
  }
}









