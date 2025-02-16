import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-list-application';

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

  goToFaculties() {
    this.router.navigate(['/faculties']);
  }
}


