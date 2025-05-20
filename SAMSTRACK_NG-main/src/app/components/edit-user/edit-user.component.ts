import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    let username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getUserByUsername(username);
  }

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  }

  getUserByUsername(username: any) {
    this.userService.getUserByUsername(username).subscribe((res) => {
      this.user = res;
    })

  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe((res) => {
      alert("Updated Successfully");
    })
  }

}
