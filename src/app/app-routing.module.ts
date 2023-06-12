import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {AddNewItemComponent} from "./pages/add-new-item/add-new-item.component";
import {ItemDetailsComponent} from "./pages/item-details/item-details.component";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {AuthorizedGuardService, UnauthorizedGuardService} from "./service/auth/authorized-guard.service";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'register', component: SignUpComponent, canActivate: [UnauthorizedGuardService]},
  {path: 'add', component: AddNewItemComponent, canActivate: [AuthorizedGuardService]},
  {path: 'item/:id', component: ItemDetailsComponent, canActivate: [AuthorizedGuardService]},
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthorizedGuardService]},



  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
