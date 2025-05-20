import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {

  constructor(private router:Router){}


  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigateByUrl('');
  }

}
