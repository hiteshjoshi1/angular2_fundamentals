import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {FormInterface} from './../../form.interface';
import {UserService} from './../services/user.service';
import {Router} from '@angular/router';
import { Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {User} from './../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, FormInterface {

 private form: FormGroup;
 private user =  new User();
 private title: string;

constructor(private _formBuilder: FormBuilder,
            private _userService: UserService,
            private _routeParams: ActivatedRoute,
            private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  this._routeParams.params.subscribe(params => {
      var id = +params['id']; // (+) converts string 'id' to a number
      this.title =id? 'EditUser':'New User';
      if(!id)
         return;

         this._userService.getUser(id).subscribe(res => this.user = res,
         response => {
           if(response.status == 404) {
            this._router.navigate(['users']);
           }
         });

    });
    // this.route.params.switchMap((params: Params) => this._userService.getUser(+params['id']))
    // .subscribe(res => this.user = res);
  }

  createForm(){
         this.form = this._formBuilder.group({
           name:  ['', Validators.compose([Validators.required])],
           email: ['', Validators.compose([Validators.required, Validators.email])],
           phone: ['', Validators.compose([Validators.required])],
           address: this._formBuilder.group({
           street: ['', Validators.compose([Validators.required])],
           suite: ['', Validators.compose([Validators.required])],
           city:  ['', Validators.compose([Validators.required])],
           zipcode: ['', Validators.compose([Validators.required])]
           })
         });
  }

  addUser(){
      this._userService.addUser(this.form.value).subscribe(res => {
      console.log(res);
      this.form.reset();
      this._router.navigate(['users']);
    });
  }

updateUser(){

 this._routeParams.params.subscribe(params => {
   const id = +params['id'];
   this._userService.updateUser(this.form.value, id).subscribe(res => {
      console.log(res);
      this.form.reset();
      this._router.navigate(['users']);
    });
 });
}

hasUnsavedchanges(): Boolean{
   if(this.form.dirty) {
    return true;
  }
  else{
  return false;
  }
}

}
