import { Component } from '@angular/core';
import {RegisterService} from "../../service/auth/register.service";
import {LoginService} from "../../service/auth/login.service";
import {AuthJwtService} from "../../service/auth/auth-jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: RegisterService, private tokenService: AuthJwtService, private router: Router) {}

  register(): void {
    this.authService.register(this.username, this.password)
      .subscribe(
        response => {
          this.tokenService.saveTokenToSessionStorage(response.token)
          this.router.navigate(['']);
        },
        error => {
          this.error = error.error.message;
        }
      );
  }

  closeError() {
    this.error = '';
  }
}
