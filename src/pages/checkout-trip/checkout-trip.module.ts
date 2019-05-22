import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutTripPage } from './checkout-trip';

@NgModule({
  declarations: [
    CheckoutTripPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutTripPage)
  ],
  exports: [
    CheckoutTripPage
  ]
})

export class CheckoutTripPageModule { }
