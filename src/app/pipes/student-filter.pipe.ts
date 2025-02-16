import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../services/student.service';

@Pipe({
  name: 'studentFilterPipe',
  standalone: true,
})
export class StudentFilterPipe implements PipeTransform {
  transform(students: Student[], searchTerm: string): Student[] {
    if (!searchTerm) {
      return students;
    }
    return students.filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}



