import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private universityService: UniversityService) {
    this.university = this.universityService.getUniversity();
  }
}
