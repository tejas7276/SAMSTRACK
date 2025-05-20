import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  constructor(
    private subjectService: SubjectService,
    private attendanceService: AttendanceService
  ) { }

  subjects: any[] = [];
  attendanceRecords: any[] = [];
  selectedUser: string = '';
  selectedSubject: any;
  selectedDate: string = '';

  ngOnInit(): void {
    this.getSubjects();
    this.selectedUser=localStorage.getItem('user') || '';

  }

  getSubjects() {
    this.subjectService.allSubjects().subscribe((res) => {
      this.subjects = res;
    });
  }

  changeSubject(event: any) {
    this.selectedSubject = event.target.value;
  }

  changeDate(event: any) {
    this.selectedDate = event.target.value;
  }

  selectedStudents: any[] = [];
  isModalOpen: boolean = false;
  showStudents(students: any[]) {
    this.selectedStudents = students;
    this.isModalOpen = true;
    console.log(this.selectedStudents);

  }

  closeModal() {
    this.isModalOpen = false;
  }

  fetchAttendanceRecords() {
    this.attendanceService.filteredAttendance(this.selectedUser, this.selectedSubject, this.selectedDate).subscribe((res) => {
      this.attendanceRecords = res;
      if (this.attendanceRecords.length === 0) {
        alert("No attendance records found for the selected date");
      }
    })
  }

  fetchAllAttendanceRecords() {
    this.attendanceService.allAttendance().subscribe((res) => {
      this.attendanceRecords = res;
      if (this.attendanceRecords.length === 0) {
        alert("No attendance records found for the selected date");
      }
    })
  }
}
