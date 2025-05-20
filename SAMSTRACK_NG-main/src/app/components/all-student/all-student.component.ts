import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {
  constructor(private studentService: StudentService) { }
  students: any[] = [];

  ngOnInit(): void {

    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.allStudent().subscribe((res) => {
      this.students = res;
      if (this.students.length == 0) {
        alert("No student found");
      }
    });
  }

  deleteStudent(id : any){

    this.studentService.deleteStudent(id).subscribe((res) => {
      alert(res);
      this.getAllStudent();
    });
  }

}
