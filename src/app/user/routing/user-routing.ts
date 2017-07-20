import {Routes,RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddUserComponent} from './../add-user/add-user.component';
import {UsersComponent} from './../users/users.component';
import {PreventDirtyCheckingGuard} from './../../services/prevent-dirty-checking.guard';

const routes: Routes = [
{
path: 'users', component: UsersComponent
},
{
  path: 'users/new', component: AddUserComponent,canDeactivate: [PreventDirtyCheckingGuard] 
},
{
  path: 'users/id/:id', component: AddUserComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
