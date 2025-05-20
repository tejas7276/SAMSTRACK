import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/login-user";

    return this.http.post(apiUrl, user);

  }

  registerUser(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/register-user";

    return this.http.post(apiUrl, user, { 'responseType': 'text' });

  }


  getAllUser(): Observable<any> {
    const apiUrl = "http://localhost:8091/user/get-all-user";
    return this.http.get(apiUrl);
  }

  getAllAdmins(): Observable<any> {
    const apiUrl = "http://localhost:8091/user/get-all-admin";
    return this.http.get(apiUrl);
  }

  getAllFaculty(): Observable<any> {
    const apiUrl = "http://localhost:8091/user/get-all-faculty";
    return this.http.get(apiUrl);
  }

  deleteUser(username: string): Observable<any> {
    const apiUrl = `http://localhost:8091/user/delete-user-by-username?username=${username}`;
    return this.http.delete(apiUrl, { 'responseType': 'text' })
  }

  getUserByUsername(username: string): Observable<any> {
    const apiUrl = `http://localhost:8091/user/get-user-by-username/${username}`;

    return this.http.get(apiUrl);
  }


  updateUser(user: any): Observable<any> {
    const apiUrl = "http://localhost:8091/user/update-user";
    return this.http.put(apiUrl, user)
  }

}
