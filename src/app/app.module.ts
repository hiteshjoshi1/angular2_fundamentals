import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import {UserModule} from './user/user.module';


import {AppRoutingModule} from './routing/app-routing';
import {UserRoutingModule} from './user/routing/user-routing';
import {CommonUtilsModule} from './common-utils/common-utils.module';
import {PostService} from './services/post.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostsComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // custom module
    UserModule,
    // routing parent module
    AppRoutingModule,
    // routing child Module
    UserRoutingModule,
    CommonUtilsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
