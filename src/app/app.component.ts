import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdonisService } from './adonis.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    posts: any;
    private postSubscription: Subscription;

    constructor(private ad: AdonisService) {

    }

    ngOnInit() {

        this.getPosts();

        this.postSubscription = this.ad.posts.subscribe(
            () =>this.getPosts()
        )

    }

    getPosts(){
        this.ad.getPost().subscribe(
            res => this.posts = res
        )
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
