import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import { DataTransferService } from 'src/app/service/util/data-transfer.service';
import {AuthJwtService} from "../../service/auth/auth-jwt.service";
import {LoginService} from "../../service/auth/login.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data: string = '';
  isAuthorize: boolean = false;

  constructor(private jwtService: AuthJwtService, private loginService: LoginService,
              private dataTransferService: DataTransferService, private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.isAuthorize = this.loginService.isAuthorize();
  }

  logout():void{
    this.jwtService.removeTokenFromSessionStorage();
  }
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    const input = document.getElementsByClassName('search')[0]
    if (!clickedInside) {
      this.updateData()
    }
  }
  updateData() {
    this.dataTransferService.data = this.data;
  }
}
