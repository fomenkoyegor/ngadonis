import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';


@Injectable({
    providedIn: 'root'
})
export class AdonisService {

    constructor(private http: HttpClient) {
    }

    readonly url = 'http://localhost:3333/api/';

    posts: Subject<any> = new Subject();

    data: any = [];

    getPost() {

        return this.http.get(this.url + 'posts')
            .pipe(map(
                (res) => res['data']
            ))
    }

    addPost(post:Post) {
        return this.http.put(
            this.url + 'post', 
            post
        ).subscribe(res => this.posts.next())


    }

    deletePost(id) {
        return this.http.delete(this.url + `post/${id}`)
            .subscribe(res => this.posts.next())
    }
}
