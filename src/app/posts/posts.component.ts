import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { Post } from './../models/posts';
import { UserService } from './../user/services/user.service';
import { User } from './../user/models/user';
import * as _ from 'underscore';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  selectedPost: Post;
  comments;
  postsLoading = false;
  commentsLoading = false;
  pagedPosts = [];
  pageSize = 10;


  users: User[];

  constructor(private _postService: PostService, private _userService: UserService) { }

  ngOnInit() {

    this.loadUsers();
    this.loadPosts();
  }


  private loadUsers(): void {
    this._userService.getAllUsers().subscribe(res => this.users = res,
      error => console.log(error));
  }
  onClick(post: Post) {
    this.selectedPost = post;
    this.commentsLoading = true;
    this._postService.getPostComments(post.id).subscribe(res => {
      this.commentsLoading = false;
      this.comments = res;
    });
  }

  filterPost(filter) {
    this.selectedPost = null;
    this.pagedPosts = [];
    this.loadPosts(filter);
  }
  // filter? is to take filter as optional parameter
  private loadPosts(filter?): void {
    this.postsLoading = true;
    this._postService.getAllPosts(filter).subscribe(res => {
      this.posts = res;
      this.setPagedPosts(0);
      this.postsLoading = false;
    }, error => console.log(error));
  }

  paginate($event) {
    this.pagedPosts = [];
    const startIndex = ($event - 1) * this.pageSize;
    this.setPagedPosts(startIndex);
  }

  private setPagedPosts(index){
          // index= how many records it should skip
           this.pagedPosts = _.take(_.rest(this.posts, index), this.pageSize);
  //  for (let k = index; k < (this.pageSize + index); k++) {
  //     this.pagedPosts.push(this.posts[k]);
  //   }
  }

}
