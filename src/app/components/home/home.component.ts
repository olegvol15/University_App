import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UniversityService } from '../../services/university.service';
import { University } from '../../models/university.model';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent {
  university: University;

  constructor(private universityService: UniversityService, private router: Router) {
    this.university = this.universityService.getUniversity();
  }

  goToFaculties(): void {
    this.router.navigate(['/faculties']);
  }

  goToStudents(): void {
    this.router.navigate(['/students']);
  }

  goToApplicationForm(): void {
    this.router.navigate(['/apply']);
  }

  goToApply() {
    this.router.navigate(['/apply']);
  }

  goToAchievements() {
    this.router.navigate(['/achievements']);
  }
}

