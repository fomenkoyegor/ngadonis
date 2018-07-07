import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { AdonisService } from '../adonis.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts = [];
  private postUpdate: Subscription;
  constructor(private adonisServise: AdonisService) { }

  ngOnInit() {
    this.getPosts();
    this.postUpdate = this.adonisServise.posts.subscribe(
      () => this.getPosts()
    )
  }

  getPosts() {
    this.adonisServise.getPost()
      .subscribe(res => this.posts = res)
  }

  onDelete(id){
    this.adonisServise.deletePost(id);
  }

  ngOnDestroy() {
    this.postUpdate.unsubscribe();
  }

}
