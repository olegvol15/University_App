import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FacultyListComponent } from './components/faculty-list/faculty-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';
import { AchievementsComponent } from './components/achievements/achievements.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'faculties', component: FacultyListComponent },
  { path: 'faculty/:id', component: StudentListComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'apply', component: ApplicationFormComponent },
  { path: 'achievements', component: AchievementsComponent }
];

export const appRouting = provideRouter(routes);
