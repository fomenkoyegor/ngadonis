import { Component, OnInit } from '@angular/core';
import { AdonisService } from '../adonis.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    postForm: FormGroup;

    constructor(private ad: AdonisService, private fb: FormBuilder) {
        this.postForm = fb.group({
            'title': [null, Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(15)
            ])],

            'body': [null, Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(150)
            ])]
        });
    }

    ngOnInit() {
    }

    addPost(post: Post) {

        this.ad.addPost(post);
        this.postForm.reset()

    }
}
