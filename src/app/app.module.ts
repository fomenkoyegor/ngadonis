import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
