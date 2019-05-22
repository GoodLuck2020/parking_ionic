import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchTripsPage } from './search-trips';

@NgModule({
  declarations: [
    SearchTripsPage
  ],
  imports: [
    IonicPageModule.forChild(SearchTripsPage)
  ],
  exports: [
    SearchTripsPage
  ]
})

export class SearchTripsPageModule { }
