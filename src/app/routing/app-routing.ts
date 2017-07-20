import {Routes,RouterModule} from '@angular/router';
import {UsersComponent} from './../user/users/users.component';
import {PostsComponent} from './../posts/posts.component';
import {HomeComponent} from './../home/home.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
{
path: 'home', component: HomeComponent
},
{
path: 'posts', component: PostsComponent
},
{
path: '', component: HomeComponent
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes
  // ,{ enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
