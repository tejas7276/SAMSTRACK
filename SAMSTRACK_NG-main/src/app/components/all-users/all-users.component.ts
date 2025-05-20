import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  userList: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }



  getAllUser() {
    this.userService.getAllUser().subscribe((res) => {
      this.userList = res;
      console.log(res);

    })
  }

  deleteUser(username: string) {
    const confirmDelete = confirm("Do you want to delete this user?");
    if (confirmDelete) {
      // Proceed with the deletion logic
      this.userService.deleteUser(username).subscribe(
        (response) => {
          alert("User deleted successfully!");
          this.getAllUser();
        },
        (error) => {
          alert("Failed to delete user.");
        }
      );
    }
  }


}
