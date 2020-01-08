import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  doLogin() {
    console.log(this.user);
    this.authService.doLogin(this.user);
  }

}
