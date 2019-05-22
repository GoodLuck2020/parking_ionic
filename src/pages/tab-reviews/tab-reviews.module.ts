import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabReviewsPage } from './tab-reviews';

@NgModule({
  declarations: [
    TabReviewsPage
  ],
  imports: [
    IonicPageModule.forChild(TabReviewsPage)
  ],
  exports: [
    TabReviewsPage
  ]
})

export class TabReviewsPageModule { }
