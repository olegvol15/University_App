import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentService, Student } from '../../services/student.service';
import { StudentFilterPipe } from '../../pipes/student-filter.pipe';

@Component({
  selector: 'app-student-list',
  standalone: true,
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  imports: [CommonModule, RouterModule, FormsModule, StudentFilterPipe]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  searchTerm: string = '';
  faculty!: string;  // Добавлено свойство факультета

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute, // Добавлен ActivatedRoute для получения параметров маршрута
    private router: Router
  ) {}

  goToAddStudent(): void {
    this.router.navigate(['/add-student']);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.faculty = params.get('id') || ''; // Получаем строку факультета
      console.log('Факультет:', this.faculty);
  
      this.loadStudents();
    });
  }

  loadStudents(): void {
    const allStudents = this.studentService.getStudents();
    console.log('Все студенты:', allStudents); // Отладка
  
    this.students = allStudents.filter(s => s.faculty === this.faculty);
    console.log('Отфильтрованные студенты:', this.students); // Отладка
  }
  

  selectStudent(student: Student): void {
    console.log('Выбран студент:', student);
  }
}










