import { Injectable } from '@angular/core';
import { University, Faculty } from '../models/university.model';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private university: University = {
    name: "Национальный университет",
    description: "Один из ведущих университетов с большим выбором факультетов.",
    imageUrl: "assets/university.jpg",
    faculties: [
      { id: 1, name: "Финансы" },
      { id: 2, name: "Экономика" },
      { id: 3, name: "Маркетинг" },
      { id: 4, name: "Право" }
    ]
  };

  getUniversity(): University {
    return this.university;
  }

  getFaculties(): Faculty[] {
    return this.university.faculties;
  }
}
