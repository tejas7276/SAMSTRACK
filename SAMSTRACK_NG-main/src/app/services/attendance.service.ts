import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private http: HttpClient) { }

  filteredAttendance(user: string, subjectId: number, date: string): Observable<any> {
    const apiUrl = `http://localhost:8091/attendance/get-attendance/${user}/${subjectId}/${date}`;
    return this.http.get(apiUrl);
  }

  allAttendance(): Observable<any> {
    const apiUrl = `http://localhost:8091/attendance/get-all-attendance-records`;
    return this.http.get(apiUrl);
  }


  saveAttendance(data: any): Observable<any> {
    const apiUrl = `http://localhost:8091/attendance/take-attendance`;
    return this.http.post(apiUrl, data);
  }
}
