import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LotDetailPage } from './lot-detail';

@NgModule({
  declarations: [
    LotDetailPage
  ],
  imports: [
    IonicPageModule.forChild(LotDetailPage)
  ],
  exports: [
    LotDetailPage
  ]
})

export class LotDetailPageModule { }
