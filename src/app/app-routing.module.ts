import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GuestLoginComponent } from './guest-login/guest-login.component';

const routes: Routes = [
  {path:'login', component:GuestLoginComponent},
  {path:'catalogue', component:CatalogueComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'admin', component:AdminPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
