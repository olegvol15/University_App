import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../../services/student.service';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  imports: [CommonModule],
})
export class StudentDetailComponent implements OnInit {
  student!: Student | undefined;

  constructor(private route: ActivatedRoute, private studentService: StudentService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const studentId = Number(params.get('id'));
      if (!isNaN(studentId)) {
        this.student = this.studentService.getStudentById(studentId);
        console.log('Загруженный студент:', this.student);
      }
    });
  }
}









