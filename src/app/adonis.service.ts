import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import set = Reflect.set;

@Injectable({
    providedIn: 'root'
})
export class AdonisService {

    constructor(private http: HttpClient) {
    }

    readonly url = 'http://localhost:3333/api/';

    posts: Subject<any> = new Subject();
    data;

    getPost(): Observable<any> {
        this.http.get(this.url + 'posts')
            .subscribe(res => {
                this.posts.next(res['data'])
            });
        return this.posts
    }

    addPost(title, text): Observable<any> {
        return this.http.put(this.url + 'post', {
            title: title,
            body: text
        });
        this.posts.next();
    }
}
