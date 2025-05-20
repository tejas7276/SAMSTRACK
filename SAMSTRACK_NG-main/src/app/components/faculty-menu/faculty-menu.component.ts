import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-menu',
  templateUrl: './faculty-menu.component.html',
  styleUrls: ['./faculty-menu.component.css']
})
export class FacultyMenuComponent {
  constructor(private router:Router) { }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigateByUrl('');
  }

}
