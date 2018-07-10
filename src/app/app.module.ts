import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { MusicComponent } from './music/music.component';

@NgModule({
   declarations: [
      AppComponent,
      PostComponent,
      PostsComponent,
      MusicComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
