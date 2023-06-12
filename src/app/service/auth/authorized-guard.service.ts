import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuardService implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorize()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuardService implements CanActivate {
  constructor(private authService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthorize()) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
