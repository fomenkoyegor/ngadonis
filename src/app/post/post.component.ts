import {Component, OnInit} from '@angular/core';
import {AdonisService} from '../adonis.service';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    title = '';
    body = '';

    constructor(private ad: AdonisService) {
    }

    ngOnInit() {
    }

    addPost() {
        this.ad.addPost(this.title, this.body)
            
    }
}
