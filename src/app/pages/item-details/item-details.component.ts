import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Certificates} from "../../entity/Certificates";
import {CertificatesService} from "../../service/certificates.service";
import {ItemService} from "../../service/item/item.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  public certificate: Certificates = new Certificates(0, 'Coupon name', 'Description', 100, 5, new Date(), new Date() , []);
  public inBasket: boolean;

  constructor(private route: ActivatedRoute, private certificateService: CertificatesService,  private itemService: ItemService) {
    this.inBasket = this.updateBasket()
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.certificateService.getCertificateById(id).subscribe(response=>{
        this.certificate = response;
        this.updateBasket()
      });
    });
  }
  saveCertificate(){
    if(this.itemService.getAllItemFromLocalStorage()?.some(cert=>cert.id===this.certificate.id)){
      this.itemService.removeItemFromBasket(this.certificate)
    }else{
      this.itemService.addItemToBasket(this.certificate)
    }
    this.updateBasket()
  }
  updateBasket(){
    this.inBasket = !!this.itemService.getAllItemFromLocalStorage()
      ?.some(cert => cert.id === this.certificate.id);
    return this.inBasket;
  }
}
