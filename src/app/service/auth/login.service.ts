import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {DOMAIN} from "../../util/constants";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginData = {
      username: username,
      password: password
    };
    return this.http.post<any>(`${DOMAIN}/api/auth/login`, loginData);

  }
  isAuthorize(): boolean {
    let token = localStorage.getItem('jwtToken')
    return token !== null
  }
}

