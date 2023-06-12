import {Component, Input} from '@angular/core';
import {Tag} from "../../entity/Tag";
import {Certificates} from "../../entity/Certificates";

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent {
  _tags: Tag[] = [new Tag(0, 'Tag name')];
  _certificates: Certificates = new Certificates(0, 'Coupon name', 'Description', 100, 5, new Date(), new Date() , this._tags);
  @Input() coupon: Certificates = this._certificates;
}
