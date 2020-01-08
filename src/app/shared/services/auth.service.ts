import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAutenticated = false;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    if (user.username === 'admin' && user.password === 'admin') {
      this.showMenuEmitter.emit(true);
      this.userAutenticated = true;
      this.router.navigate(['/home']);
    } else {
      this.userAutenticated = false;
      this.showMenuEmitter.emit(false);
    }
  }
  isAutenticationUser() {
    return this.userAutenticated;
  }

}
