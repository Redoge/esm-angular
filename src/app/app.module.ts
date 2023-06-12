import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { AddNewItemComponent } from './pages/add-new-item/add-new-item.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { CouponMainComponent } from './components/coupon-main/coupon-main.component';
import { CategoryMainComponent } from './components/category-main/category-main.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./service/Interceptor/auth.interceptor";
import { CheckoutItemComponent } from './components/checkout-item/checkout-item.component';
import { CheckoutTotalComponent } from './components/checkout-total/checkout-total.component';
import { DollarPipe } from './pipe/dollar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    CheckoutComponent,
    AddNewItemComponent,
    ItemDetailsComponent,
    CouponMainComponent,
    CategoryMainComponent,
    CheckoutItemComponent,
    CheckoutTotalComponent,
    DollarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
