import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubject(subject: any): Observable<any> {
    const apiUrl = "http://localhost:8091/subject/add-subject";
    return this.http.post(apiUrl, subject)

  }

  allSubjects(): Observable<any> {
    const apiUrl = "http://localhost:8091/subject/get-all-subjects";
    return this.http.get(apiUrl);
  }

  getSubject(id: any): Observable<any> {
    const apiUrl = `http://localhost:8091/subject/get-subject-by-id/${id}`;
    return this.http.get(apiUrl);
  }



}
