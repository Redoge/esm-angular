import {Injectable} from '@angular/core';
import {Certificates} from "../../entity/Certificates";
import {DOMAIN} from "../../util/constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}
  saveItemToServer(name: string, description:string,
  price: number, duration:number, tags: string[]){
    const data = {
      name: name,
      description: description,
      price: price,
      duration: duration,
      tags: tags
    };
    return this.http.post<any>(`${DOMAIN}/api/certificates`, data, );
  }
  addItemToBasket(certificates: Certificates) {
    let basketString = localStorage.getItem('basket');
    let basket: Certificates[] = []
    if (basketString != null) {
      basket = JSON.parse(basketString);
    }
    if (!basket.some(cert => cert.id === certificates.id)) {
     basket.push(certificates);
     localStorage.setItem('basket', JSON.stringify(basket));
    }
    console.log(basket);
  }
  getAllItemFromLocalStorage(): Certificates[] | null{
    let basketString = localStorage.getItem('basket');
    if(basketString)
      return JSON.parse(basketString);
    return null;
  }

  removeItemFromBasket(certificate: Certificates) {
    let basketString = localStorage.getItem('basket');
    let basket: Certificates[] = []
    if (basketString != null) {
      basket = JSON.parse(basketString);
    }
    basket = basket.filter(cert => cert.id !== certificate.id)
    localStorage.setItem('basket', JSON.stringify(basket));
    console.log(basket);
  }

  removeAllItemFromBasket() {
    localStorage.removeItem('basket')
  }
}
