import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOMAIN} from "../util/constants";
import {Certificates} from "../entity/Certificates";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  constructor(private http: HttpClient) { }

  getAllCertificatesByPage(page:number): Observable<any> {
    return this.http.get<any>(`${DOMAIN}/api/certificates?page=${page}`)
  }
  getAllCertificates(): Observable<any> {
    return this.http.get<any>(`${DOMAIN}/api/certificates`)
  }

  getCertificateById(id: number):Observable<any> {
    return this.http.get<any>(`${DOMAIN}/api/certificates/`+id);
  }
}
