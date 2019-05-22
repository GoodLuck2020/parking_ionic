import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutLotPage } from './checkout-lot';

@NgModule({
  declarations: [
    CheckoutLotPage
  ],
  imports: [
    IonicPageModule.forChild(CheckoutLotPage)
  ],
  exports: [
    CheckoutLotPage
  ]
})

export class CheckoutLotPageModule { }
