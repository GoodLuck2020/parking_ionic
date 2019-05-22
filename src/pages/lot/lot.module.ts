import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotPage } from './lot';

@NgModule({
  declarations: [
    LotPage
  ],
  imports: [
    IonicPageModule.forChild(LotPage)
  ],
  exports: [
    LotPage
  ]
})

export class LotPageModule { }
