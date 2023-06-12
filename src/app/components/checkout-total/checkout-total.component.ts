import {Component, Input} from '@angular/core';
import {CheckoutService} from "../../service/checkout.service";
import {ItemService} from "../../service/item/item.service";

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.css']
})
export class CheckoutTotalComponent {
  @Input() total: number = 0;


  constructor(private checkoutService: CheckoutService, private itemService: ItemService) {

  }

  checkout() {
    this.checkoutService.checkout(this.itemService.getAllItemFromLocalStorage())
    this.itemService.removeAllItemFromBasket()
    window.location.assign('/');
  }
}
