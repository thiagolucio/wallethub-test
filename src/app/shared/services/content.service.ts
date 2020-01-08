import { Injectable } from '@angular/core';
import { Content } from '../interfaces/content';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private readonly APICONTENT = `${environment.API}/content`;

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.APICONTENT)
      .pipe(
        tap(console.log));
  }

}
