import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Certificates} from "../../entity/Certificates";
import {Tag} from "../../entity/Tag";
import {ItemService} from "../../service/item/item.service";
@Component({
  selector: 'app-coupon-main',
  templateUrl: './coupon-main.component.html',
  styleUrls: ['./coupon-main.component.css']
})
export class CouponMainComponent implements OnInit {
  _tags: Tag[] = [new Tag(0, 'Tag name')];
  _certificates: Certificates = new Certificates(0, 'Coupon name', 'Description', 100, 5, new Date(), new Date() , this._tags);
  @Input() coupon: Certificates = this._certificates;
  inBasket = false;

  constructor(  private itemService: ItemService) {}

  saveCertificate(certificate: Certificates){
    if(this.itemService.getAllItemFromLocalStorage()?.some(cert=>cert.id===certificate.id)){
      this.itemService.removeItemFromBasket(certificate)
    }else{
      this.itemService.addItemToBasket(certificate)
    }
    this.updateBasket()
  }
  updateBasket(){
    this.inBasket = !!this.itemService.getAllItemFromLocalStorage()?.some(cert => cert.id === this.coupon.id);
  }

  ngOnInit(): void {
    this.updateBasket()
  }
}
