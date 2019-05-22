import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarsPage } from './cars';

@NgModule({
  declarations: [
    CarsPage
  ],
  imports: [
    IonicPageModule.forChild(CarsPage)
  ],
  exports: [
    CarsPage
  ]
})

export class CarsPageModule { }
