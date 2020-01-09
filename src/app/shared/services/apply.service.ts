import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Content} from '../interfaces/content';
import {tap} from 'rxjs/operators';
import {Apply} from '../interfaces/apply';

@Injectable({
  providedIn: 'root'
})
export class ApplyService {

   private readonly APIAPPLY = `${environment.API}/apply`;

  constructor(private http: HttpClient) { }

  getApply(): Observable<Apply[]> {
    return this.http.get<Apply[]>(this.APIAPPLY)
      .pipe(
        tap(console.log));
  }
}
