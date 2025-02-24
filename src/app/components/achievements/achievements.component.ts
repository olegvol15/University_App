import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}

