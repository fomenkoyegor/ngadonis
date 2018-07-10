import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusService {
  readonly url = 'http://localhost:3333/'
  constructor(private http: HttpClient) { }

  getMusic(): Observable<any> {
    return this.http.get(this.url + 'getMusic').pipe(
      map(res => res['music'])
    )
  }

  postMusic(formData): Observable<any> {
    return this.http.post(this.url + 'apiImg', formData)

  }

}
