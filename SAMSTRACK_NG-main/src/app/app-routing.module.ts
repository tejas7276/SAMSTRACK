import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FacultyDashboardComponent } from './components/faculty-dashboard/faculty-dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { AllSubjectComponent } from './components/all-subject/all-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { ViewAllAttendanceComponent } from './components/view-all-attendance/view-all-attendance.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { TakeAttendanceComponent } from './components/take-attendance/take-attendance.component';
import { ViewAttendanceComponent } from './components/view-attendance/view-attendance.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'faculty-dashboard',
    component: FacultyDashboardComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'all-user',
    component: AllUsersComponent

  },
  {
    path: 'edit-user/:username',
    component: EditUserComponent
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent
  },
  {
    path: 'all-subject',
    component: AllSubjectComponent
  },
  {
    path: 'edit-subject/:subjectid',
    component: EditSubjectComponent
  },
  {
    path: 'view-all-attendance',
    component: ViewAllAttendanceComponent
  },

  /* faculty routes */
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'all-students',
    component: AllStudentComponent
  },
  {
    path: 'edit-student/:id',
    component: EditStudentComponent
  },
  {
    path: 'take-attendance',
    component: TakeAttendanceComponent
  },
  {
    path:'view-attendance',
    component:ViewAttendanceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
