import {Component, OnInit} from '@angular/core';
import {ItemService} from 'src/app/service/item/item.service';
import {Certificates} from "../../entity/Certificates";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  certificates: Certificates[] | null = null;
  total: number ;


  constructor(private itemService: ItemService) {
    let certs = this.itemService.getAllItemFromLocalStorage();
    this.certificates = certs
    this.total = this.getTotal(certs)
    console.log('1 ' + this.certificates)
    console.log('1 ' + this.itemService.getAllItemFromLocalStorage())
    console.log('1 ' + this.getTotal(certs))
  }

  getTotal(certs: Certificates[] | null): number {
    let total = 0;
    if (certs !== null ) {
      console.log('2 ' + certs)
      for (let i = 0; i < certs.length; i ++) {
        total += certs[i].price
      }
    }
    return total;
  }
}
