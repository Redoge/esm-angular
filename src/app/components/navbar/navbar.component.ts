import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {AuthJwtService} from "../../service/auth/auth-jwt.service";
import {LoginService} from "../../service/auth/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthorize: boolean = false;
  constructor(private jwtService: AuthJwtService, private loginService: LoginService) {
  }
  ngOnInit(): void {
    this.isAuthorize = this.loginService.isAuthorize();
  }

  logout():void{
    this.jwtService.removeTokenFromSessionStorage();
  }

}
