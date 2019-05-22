import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutCarPage } from './checkout-car';

@NgModule({
  declarations: [
    CheckoutCarPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutCarPage)
  ],
  exports: [
    CheckoutCarPage
  ]
})

export class CheckoutCarPageModule { }
