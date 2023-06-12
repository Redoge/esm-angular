import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DOMAIN} from "../util/constants";
import {Certificates} from "../entity/Certificates";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) {}

  checkout(certificates: Certificates[]|null) {
    if(certificates!=null){
      for(let i = 0; i < certificates.length; i++) {
        this.saveCertificate(certificates[i].id)
      }
    }
  }

  saveCertificate(certId: number){
    const loginData = {
      certId: certId
    };
    return this.http.post<any>(`${DOMAIN}/api/auth/login`, loginData);
  }
}
