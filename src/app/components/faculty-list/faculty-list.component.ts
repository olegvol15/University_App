import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UniversityService } from '../../services/university.service';
import { Faculty } from '../../models/university.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-faculty-list',
  standalone: true,
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class FacultyListComponent {
  faculties: Faculty[];

  constructor(private universityService: UniversityService) {
    this.faculties = this.universityService.getFaculties();
    console.log('Список факультетов:', this.faculties);
  }
}
