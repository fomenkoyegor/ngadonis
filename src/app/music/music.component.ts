import { Component, OnInit, ViewChild } from '@angular/core';
import { MusService } from '../mus.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  musics = [];
  name = '';
  prefix = '';
  @ViewChild("fileInput") fileInput;

  constructor(private mus: MusService) {

  }

  ngOnInit() {
    this.getMusic()
  }

  getMusic() {
    this.prefix = this.mus.url;
    this.mus.getMusic().subscribe(res => {
      this.musics = res
    })
  }

  addMusic() {
    if (!this.name || !this.fileInput.nativeElement.files[0]) return;
    let file = this.fileInput.nativeElement.files[0];
    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('file', file);
    this.mus.postMusic(formData)
      .subscribe(res => {
        console.log(res);
        this.getMusic()
      })
  }

}
