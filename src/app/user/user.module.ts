import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { AddUserComponent } from './add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PreventDirtyCheckingGuard} from './../services/prevent-dirty-checking.guard';
import {CommonUtilsModule} from './../common-utils/common-utils.module';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonUtilsModule,
    RouterModule
  ],
  declarations: [UsersComponent, AddUserComponent],
  providers: [UserService, PreventDirtyCheckingGuard]
}
)
export class UserModule { }
