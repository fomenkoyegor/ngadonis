import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdonisService} from './adonis.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    posts;
    private postSubscription: Subscription;

    constructor(private ad: AdonisService) {

    }

    ngOnInit() {
        this.posts = this.ad.getPost();
        this.postSubscription = this.ad.posts.subscribe(
            () => this.posts = this.ad.getPost()
        );
    }

    ngOnDestroy() {
        this.postSubscription.unsubscribe();
    }
}
