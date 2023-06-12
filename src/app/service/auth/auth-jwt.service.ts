import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(private router: Router) { }

  saveTokenToSessionStorage(token: string){
    localStorage.setItem('jwtToken', token);
    window.location.assign('/');
  }

  removeTokenFromSessionStorage(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('basket')//TODO: maybe change this in future
    window.location.assign('/');
  }
}
