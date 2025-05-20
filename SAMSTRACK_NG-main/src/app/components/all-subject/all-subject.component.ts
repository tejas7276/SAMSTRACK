import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.css']
})
export class AllSubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  subjectList: any[] = [];

  ngOnInit(): void {
    this.allSubjects();
  }

  allSubjects() {
    this.subjectService.allSubjects().subscribe((res) => {
      this.subjectList = res;
    })
  }



}
