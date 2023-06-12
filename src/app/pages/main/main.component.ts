import {Component, ElementRef, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Certificates} from "../../entity/Certificates";
import {CertificatesService} from "../../service/certificates.service";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import { DataTransferService } from 'src/app/service/util/data-transfer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  certificates: Certificates[] = [];
  private allCerts: Certificates[] = [];
  private currentPage = 0;
  private pages = 0;
  private elementRef;
  private navBar;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private certificateService: CertificatesService,
    private dataTransferService: DataTransferService) {
    this.navBar =  document.getElementsByClassName('nav')[0]
    this.elementRef = new ElementRef(this.navBar)
  }

  ngOnInit(): void {
    this.loadScript('/assets/js/mainPage.js');
    this.getPagesAndSetFirstData()
  }

  loadMore() {
    this.certificateService.getAllCertificatesByPage(this.currentPage).subscribe(response => {
      if (this.pages>=this.currentPage && response._embedded.gift_certificates != null) {
        this.currentPage += 1;
        this.certificates = this.certificates.concat(response._embedded.gift_certificates);
        console.log({all: this.pages, current: this.currentPage-1, certificates: this.certificates})
        this.allCerts = this.certificates.copyWithin(this.certificates.length, 0);
      }
    });
  }

  private getPagesAndSetFirstData() {
    this.certificateService.getAllCertificates().subscribe(response => {
      let pages = response.page.totalPages
      this.pages = pages != 0 ? pages - 1 : 0;
      this.loadMore()
    });
  }

  private loadScript(url: string): void {
    const script = this.document.createElement('script');
    script.src = url;
    this.document.body.appendChild(script);
  }

  @HostListener('window:scroll', ['$event'])
  isAtBottom() {
    const threshold = 100;
    const position = window.pageYOffset + window.innerHeight;
    const height = document.body.scrollHeight;
    if (position > height - threshold) this.loadMore();
  }
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.searchByNameOrDescription()
    }
  }

  private searchByNameOrDescription() {
    const data = this.dataTransferService.data.toLowerCase();
    if(data.length > 0) {
      console.log('Search: ' + this.dataTransferService.data);
      this.certificates = this.allCerts.filter(certificate => (certificate.name.toLowerCase().includes(data) || certificate.description.toLowerCase().includes(data)))
    }else{
      this.certificates = this.allCerts;
    }
  }
}
