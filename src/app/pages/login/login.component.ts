import { Component } from '@angular/core';
import {LoginService} from "../../service/auth/login.service";
import {AuthJwtService} from "../../service/auth/auth-jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: LoginService, private tokenService: AuthJwtService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          this.tokenService.saveTokenToSessionStorage(response.token)
          this.router.navigate(['']);
        },
        error => {
          this.error = 'Username or password incorrect!!!';
        }
      );
  }
  closeError() {
    this.error = '';
  }
}
