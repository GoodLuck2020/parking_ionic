import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoriteListPage } from './favorite-list';

@NgModule({
  declarations: [
    FavoriteListPage
  ],
  imports: [
    IonicPageModule.forChild(FavoriteListPage)
  ],
  exports: [
    FavoriteListPage
  ]
})

export class FavoriteListPageModule { }
