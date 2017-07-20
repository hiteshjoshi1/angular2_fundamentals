import { Component, OnInit } from '@angular/core';
import {UserService} from './../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];
  // parameter for spinner
  isRequesting: boolean;
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  this.isRequesting = true;
  this._userService.getAllUsers().subscribe(res => {
      this.users = res;
  }, () => this.stopRefreshing(),
    () => this.stopRefreshing());
}
editUser(user) {
  this._router.navigate(['users/id/', user.id]);
}

deleteUser(user){
  if(confirm('Are you sure you want to delete '+user.name +'?')){
    var index = this.users.indexOf(user);
    this.users.splice(index, 1);

   this._userService.deleteUser(user.id).subscribe(res => console.log('deleted'), err => {
        alert('Could not delete the user.');
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
        this.users.splice(index, 0, user);
    } );
  }

}

  private stopRefreshing() {
        this.isRequesting = false;
    }


}
